import React, { useState } from "react";
import GoogleIcon from "../icons/google_icon";
import FacebookIcon from "../icons/facebook-icon";
import OutlookIcon from "../icons/outlook-icon";
import Button from "../ui/button";
import Input from "../ui/input";
import styles from "./login-form.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { ILoginRequest, IRegisterRequest } from "@/models/user";
import { loginDetailsState, registerDetailsState } from "@/recoil/auth/atom";
import { useRouter } from "next/router";

// This is for the main login/signup page with Google, FB and Outlook sign in
export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [loginDetails, setLoginDetails] =
    useRecoilState<ILoginRequest>(loginDetailsState);
  const [registerDetails, setRegisterDetails] =
    useRecoilState<IRegisterRequest>(registerDetailsState);
  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const onLoginClick = async () => {
    setLoginDetails({ ...loginDetails, email });
    router.push("/users/login");
  };

  const onRegisterClick = async () => {
    setRegisterDetails({ ...registerDetails, email });
    router.push("/users/signup");
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_row}>
        <Input
          error="Only alphabetical characters allowed!"
          isRequired={true}
          label="Enter Your Email to Begin"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}
      </div>
      <div className={styles.btn_groups}>
        <Button onClick={onLoginClick}>Login</Button>
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
