import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import LoginHeader from "@/components/users/login-header";
import styles from "../../../styles/Login.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginDetailsState, userState } from "@/recoil/auth/atom";
import { ILoginRequest, IUser } from "@/models/user";
import { useState } from "react";
import { loginApi } from "@/services/auth.service";

export default function LogInPage() {
  const setUser = useSetRecoilState<IUser>(userState);
  const loginDetails = useRecoilValue<ILoginRequest>(loginDetailsState);
  const [password, setPassword] = useState<string>("");

  const onLoginSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const { email } = loginDetails;
      const user = await loginApi({ email, password });
      setUser(user);
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
          <Input
            type="password"
            label="Enter Password"
            isRequired={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className={styles.btn_groups}>
          <Button>Log In</Button>
        </div>
      </form>
    </div>
  );
}
