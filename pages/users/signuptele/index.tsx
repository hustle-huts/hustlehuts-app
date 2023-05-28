import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import SignUpHeader from "@/components/users/signup-header";
import styles from "../../../styles/SignupTele.module.css";
import { IRegisterRequest } from "@/models/user";
import { registerDetailsState } from "@/recoil/auth/atom";
import { useRecoilState } from "recoil";
import { registerApi } from "@/services/auth.service";
import { useRouter } from "next/router";
export default function SignUpTele() {
  const router = useRouter();
  const [registerDetails, setRegisterDetails] =
    useRecoilState<IRegisterRequest>(registerDetailsState);

  const onTelegramInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterDetails({ ...registerDetails, telegram_handle: e.target.value });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await registerApi(registerDetails);
      router.push("/users/signupSuccess");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <SignUpHeader />
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.form_row}>
          <Input
            label="Enter Telegram Handle"
            onChange={onTelegramInputChange}
          ></Input>
        </div>
        <div className={styles.btn_groups}>
          <Button>Continue</Button>
        </div>
      </form>
    </div>
  );
}
