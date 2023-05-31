import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import SignUpHeader from "@/components/users/signup-header";
import styles from "@/styles/Signup.module.css";
import { useRouter } from "next/router";
import { registerDetailsState } from "@/recoil/auth/atom";
import { IRegisterRequest } from "@/models/user";
import { useRecoilState } from "recoil";

export default function SignUpName() {
  const router = useRouter();
  const [registerDetails, setRegisterDetails] = useRecoilState<IRegisterRequest>(registerDetailsState);

  const onTypeChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterDetails({ ...registerDetails, [key]: e.target.value });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/users/signuptele");
  };

  return (
    <div className={styles.container}>
      <SignUpHeader />
      <form className={styles.form} onSubmit={onSubmit}>
        <div
          className={styles.form_row}
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className={styles.name}>
            <Input isRequired={true} label="First Name" onChange={onTypeChange("first_name")}></Input>
          </div>
          <div className={styles.name}>
            <Input isRequired={true} label="Last Name" onChange={onTypeChange("last_name")}></Input>
          </div>
        </div>
        <div className={styles.form_row}>
          <Input
            type="password"
            isRequired={true}
            label="Enter Your Password"
            onChange={onTypeChange("password")}
          ></Input>
          <Input
            type="email"
            isRequired={true}
            disabled
            label="Email"
            value={registerDetails.email}
            onChange={onTypeChange("email")}
          />
          <Input phone label="Enter Phone Number" onChange={onTypeChange("phone_number")}></Input>
        </div>
        <div className={styles.btn_groups}>
          <Button>Continue</Button>
        </div>
      </form>
    </div>
  );
}
