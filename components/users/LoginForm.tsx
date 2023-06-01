import React from "react";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { loginDetailsState, registerDetailsState } from "@/recoil/auth/atom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Divider, InputAdornment } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { ILoginRequest, IRegisterRequest } from "@/models/user";
import TextField from "../shared/TextField";
import Button from "../shared/Button";
import GoogleIcon from "../icons/google_icon";
import FacebookIcon from "../icons/facebook-icon";
import OutlookIcon from "../icons/outlook-icon";
import OldButton from "../ui/button";
import styles from "./LoginForm.module.css";

import { loginEmailFormSchema } from "./utils/validation-schema";
import { emailFormControlName } from "./utils/constants";
import SocialButton from "../shared/SocialButton";
import { SocialButtonType } from "../shared/constants";

const LoginForm: React.FC = () => {
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

  const [loginDetails, setLoginDetails] = useRecoilState<ILoginRequest>(loginDetailsState);
  const [registerDetails, setRegisterDetails] = useRecoilState<IRegisterRequest>(registerDetailsState);

  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const onLoginClick = async () => {
    const email = getValues(emailFormControlName);
    setLoginDetails({ ...loginDetails, email });
    router.push("/login");
  };

  const onRegisterClick = async () => {
    const email = getValues(emailFormControlName);
    setRegisterDetails({ ...registerDetails, email });
    router.push("/signup");
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
            endAdornment: getValues(emailFormControlName) && !errors[emailFormControlName] && (
              <InputAdornment position="start">
                <CheckCircleOutlinedIcon color="success" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.btn_groups}>
        <Button style={{ marginBottom: "12px" }} onClick={onLoginClick} disabled={!isValid}>
          Login
        </Button>
        <Button btnType="secondary" onClick={onRegisterClick}>
          Sign Up
        </Button>

        <Divider
          sx={{
            height: "1px",
            padding: "34px 26px",
            "& .MuiDivider-wrapper": {
              fontWeight: 500,
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6D5747",
              width: "100px",
            },
          }}
        >
          Or
        </Divider>

        <SocialButton onClick={() => loginGoogle()} btnType={SocialButtonType.GOOGLE}>
          Continue with Google
        </SocialButton>
        <SocialButton btnType={SocialButtonType.FACEBOOK} style={{ margin: "10px 0" }}>
          Continue with Facebook
        </SocialButton>
        <SocialButton btnType={SocialButtonType.OUTLOOK}>Continue with Outlook</SocialButton>
      </div>
    </div>
  );
};

export default LoginForm;
