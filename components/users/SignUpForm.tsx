import styles from "./Signup.module.css";
import { useFormContext } from "react-hook-form";
import TextField from "../shared/TextField";
import {
  emailFormControlName,
  firstNameFormControlName,
  lastNameFormControlName,
  passwordFormControlName,
  phoneNumberFormControlName,
} from "./utils/constants";
import Button from "../shared/Button";

type SignUpFormProps = {
  onContinue: () => void;
};

const SignUpForm = ({ onContinue }: SignUpFormProps) => {
  const { register, formState } = useFormContext();
  const { errors, isValid } = formState;

  return (
    <div className={styles.form}>
      <div
        className={styles.form_row}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.name}>
          <TextField
            register={register}
            name={firstNameFormControlName}
            errorText={errors[firstNameFormControlName]?.message?.toString()}
            isRequired={true}
            label="First Name"
          />
        </div>
        <div className={styles.name}>
          <TextField
            register={register}
            name={lastNameFormControlName}
            errorText={errors[lastNameFormControlName]?.message?.toString()}
            isRequired={true}
            label="Last Name"
          />
        </div>
      </div>
      <div className={styles.form_row}>
        <TextField
          register={register}
          name={passwordFormControlName}
          errorText={errors[passwordFormControlName]?.message?.toString()}
          variant="outlined"
          type="password"
          isRequired={true}
          label="Enter Your Password"
        />
        <TextField
          register={register}
          name={emailFormControlName}
          errorText={errors[emailFormControlName]?.message?.toString()}
          type="email"
          isRequired={true}
          label="Email"
          variant="outlined"
        />
        <TextField
          register={register}
          name={phoneNumberFormControlName}
          errorText={errors[phoneNumberFormControlName]?.message?.toString()}
          variant="outlined"
          isRequired={true}
          label="Phone Number"
        />
      </div>
      <div className={styles.btn_groups}>
        <Button btnType="primary" disabled={!isValid} onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
