import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import LoginHeader from "@/components/users/headers/LoginHeader";
import { passwordFormControlName } from "@/components/users/utils/constants";
import { loginPasswordFormSchema } from "@/components/users/utils/validation-schema";
import { ILoginRequest, IUser } from "@/models/user";
import { loginDetailsState, userState } from "@/recoil/auth/atom";
import { loginApi } from "@/services/auth.service";
import styles from "@/styles/Login.module.css";

const LoginPasswordPage = () => {
  const router = useRouter();
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
      router.push("/cafes");
    } catch (error) {
      setError(passwordFormControlName, {
        type: "manual",
        message: error as string,
      });
    }
  };

  return (
    <Box
      className="app-max-width"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div className={styles.container}>
        <LoginHeader />
        <div className={styles.form}>
          <div className={styles.form_row}>
            <TextField
              register={register}
              name={passwordFormControlName}
              type="password"
              label={"Enter Password"}
              errorText={errors[passwordFormControlName]?.message?.toString()}
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
    </Box>
  );
};

export default LoginPasswordPage;
