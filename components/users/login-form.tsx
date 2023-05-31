import React from "react";
import GoogleIcon from "../icons/google_icon";
import FacebookIcon from "../icons/facebook-icon";
import OutlookIcon from "../icons/outlook-icon";
import Button from "../ui/button";
import styles from "./login-form.module.css";
import { emailFormControlName } from "./constants";
import { useGoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { ILoginRequest, IRegisterRequest } from "@/models/user";
import { loginDetailsState, registerDetailsState } from "@/recoil/auth/atom";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginEmailFormSchema } from "./validation-schema";
import TextField from "../shared/TextField";
import CustomButton from "../shared/Button";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { InputAdornment } from "@mui/material";

// This is for the main login/signup page with Google, FB and Outlook sign in
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginEmailFormSchema),
    shouldUnregister: true,
  });

  const [loginDetails, setLoginDetails] =
    useRecoilState<ILoginRequest>(loginDetailsState);
  const [registerDetails, setRegisterDetails] =
    useRecoilState<IRegisterRequest>(registerDetailsState);

  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const onLoginClick = async () => {
    const email = getValues(emailFormControlName);
    setLoginDetails({ ...loginDetails, email });
    router.push("/users/login");
  };

  const onRegisterClick = async () => {
    const email = getValues(emailFormControlName);
    setRegisterDetails({ ...registerDetails, email });
    router.push("/users/signup");
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_row}>
        <TextField
          name={emailFormControlName}
          register={register}
          type="email"
          label={"Enter your email to begin"}
          variant="outlined"
          error={errors[emailFormControlName] ? true : false}
          helperText={errors[emailFormControlName]?.message?.toString()}
          autoFocus
          InputProps={{
            endAdornment: !errors[emailFormControlName] && (
              <InputAdornment position="start">
                <CheckCircleOutlinedIcon color="success" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.btn_groups}>
        <CustomButton
          style={{ marginBottom: "12px" }}
          onClick={onLoginClick}
          disabled={
            !getValues(emailFormControlName) || !!errors[emailFormControlName]
          }
        >
          Login
        </CustomButton>
        <CustomButton btnType="secondary" onClick={onRegisterClick}>
          Sign Up
        </CustomButton>
        <span className={styles.line}>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "black",
              width: "40%",
            }}
          />
          <h3>OR</h3>
          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
        </span>

        <Button
          onClick={() => loginGoogle()}
          icon={<GoogleIcon />}
          btntype="outline"
        >
          Sign in with Google
        </Button>
        <Button icon={<FacebookIcon />} btntype="outline">
          Sign Up with Facebook
        </Button>
        <Button icon={<OutlookIcon />} btntype="outline">
          Sign Up with Outlook
        </Button>
      </div>
    </div>
  );
}
