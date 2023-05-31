import React from "react";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { loginDetailsState, registerDetailsState } from "@/recoil/auth/atom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { ILoginRequest, IRegisterRequest } from "@/models/user";
import TextField from "../shared/TextField";
import Button from "../shared/Button";
import GoogleIcon from "../icons/google_icon";
import FacebookIcon from "../icons/facebook-icon";
import OutlookIcon from "../icons/outlook-icon";
import OldButton from "../ui/button";
import styles from "./login-form.module.css";

import { loginEmailFormSchema } from "./validation-schema";
import { emailFormControlName } from "./constants";

// This is for the main login/signup page with Google, FB and Outlook sign in
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
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
            endAdornment: getValues(emailFormControlName) &&
              !errors[emailFormControlName] && (
                <InputAdornment position="start">
                  <CheckCircleOutlinedIcon color="success" />
                </InputAdornment>
              ),
          }}
        />
      </div>
      <div className={styles.btn_groups}>
        <Button
          style={{ marginBottom: "12px" }}
          onClick={onLoginClick}
          disabled={!getValues(emailFormControlName) || !isValid}
        >
          Login
        </Button>
        <Button btnType="secondary" onClick={onRegisterClick}>
          Sign Up
        </Button>
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

        <OldButton
          onClick={() => loginGoogle()}
          icon={<GoogleIcon />}
          btntype="outline"
        >
          Sign in with Google
        </OldButton>
        <OldButton icon={<FacebookIcon />} btntype="outline">
          Sign Up with Facebook
        </OldButton>
        <OldButton icon={<OutlookIcon />} btntype="outline">
          Sign Up with Outlook
        </OldButton>
      </div>
    </div>
  );
}
