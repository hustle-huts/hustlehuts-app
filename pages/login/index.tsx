import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import LoginHeader from "@/components/users/login-header";
import { loginDetailsState, userState } from "@/recoil/auth/atom";
import { ILoginRequest, IUser } from "@/models/user";
import { loginApi } from "@/services/auth.service";
import TextField from "@/components/shared/TextField";
import Button from "@/components/shared/Button";

import { loginPasswordFormSchema } from "@/components/users/utils/validation-schema";
import { passwordFormControlName } from "@/components/users/utils/constants";

import styles from "@/styles/Login.module.css";
import { useEffect } from "react";
import { useToast } from "use-toast-mui";

export default function LogInPage() {
  const router = useRouter();
  const toast = useToast();
  const setUser = useSetRecoilState<IUser>(userState);
  const loginDetails = useRecoilValue<ILoginRequest>(loginDetailsState);

  const {
    register,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginPasswordFormSchema),
    shouldUnregister: true,
  });

  useEffect(() => {
    if (!loginDetails.email) {
      router.push("/");
    }
  }, []);

  const onLoginClick = async () => {
    try {
      const { email } = loginDetails;
      const user = await loginApi({
        email,
        password: getValues(passwordFormControlName),
      });
      setUser(user);
      toast.success("Successfully login!");
      router.push("/cafes");
    } catch (error) {
      toast.error(error as string);
      setError(passwordFormControlName, {
        type: "manual",
        message: error as string,
      });
    }
  };

  return (
    <div className={styles.container}>
      <LoginHeader />
      <h1 className={styles.title}>Log In</h1>
      <div className={styles.form}>
        <div className={styles.form_row}>
          <TextField
            register={register}
            name={passwordFormControlName}
            type="password"
            label={"Enter Password"}
            error={errors[passwordFormControlName] ? true : false}
            helperText={errors[passwordFormControlName]?.message?.toString()}
            autoFocus
            isRequired
          />
        </div>
        <div className={styles.btn_groups}>
          <Button btnType="primary" disabled={!getValues(passwordFormControlName) || !isValid} onClick={onLoginClick}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
