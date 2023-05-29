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
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginEmailFormSchema } from "./validation-schema";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

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
          {...register(emailFormControlName)}
          sx={{
            width: "100%",
            "& .MuiFormLabel-root": {
              fontWeight: 500,
              color: "#6D5747",
            },
          }}
          type="email"
          label={"Enter Your Email to Begin"}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          error={errors[emailFormControlName] ? true : false}
          helperText={errors[emailFormControlName]?.message?.toString()}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       {getValues("email") && !errors.email && (
          //         <CheckCircleOutlinedIcon color={"success"} />
          //       )}
          //     </InputAdornment>
          //   ),
          // }}
          autoFocus
        />
      </div>
      <div className={styles.btn_groups}>
        <Button
          onClick={onLoginClick}
          disabled={
            !getValues(emailFormControlName) || !!errors[emailFormControlName]
          }
        >
          Login
        </Button>
        <Button btntype="secondary" onClick={onRegisterClick}>
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
