import Button from "@/components/ui/button";
import LoginHeader from "@/components/users/login-header";
import styles from "@/styles/Login.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginDetailsState, userState } from "@/recoil/auth/atom";
import { ILoginRequest, IUser } from "@/models/user";
import { loginApi } from "@/services/auth.service";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginPasswordFormSchema } from "@/components/users/utils/validation-schema";
import { TextField } from "@mui/material";
import { passwordFormControlName } from "@/components/users/utils/constants";

export default function LogInPage() {
  const router = useRouter();
  const setUser = useSetRecoilState<IUser>(userState);
  const loginDetails = useRecoilValue<ILoginRequest>(loginDetailsState);
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginPasswordFormSchema),
    shouldUnregister: true,
  });

  const onLoginSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
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
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <LoginHeader />
      <h1 className={styles.title}>Log In</h1>
      <form className={styles.form} onSubmit={onLoginSubmit}>
        <div className={styles.form_row}>
          <TextField
            {...register(passwordFormControlName)}
            sx={{
              width: "100%",
              "& .MuiFormLabel-root": {
                fontWeight: 500,
                color: "#6D5747",
              },
            }}
            type="password"
            label={"Enter Password"}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            error={errors[passwordFormControlName] ? true : false}
            helperText={errors[passwordFormControlName]?.message?.toString()}
            autoFocus
          />
        </div>
        <div className={styles.btn_groups}>
          <Button>Log In</Button>
        </div>
      </form>
    </div>
  );
}
