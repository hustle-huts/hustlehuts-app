import { useFormContext } from "react-hook-form";

import styles from "@/styles/SignUpTelegramForm.module.css";

import Button from "../shared/Button";
import TextField from "../shared/TextField";
import { telegramHandlerFormControlName } from "./utils/constants";

type SignUpTelegramFormProps = {
  onContinue: () => void;
};

const SignUpTelegramForm = ({ onContinue }: SignUpTelegramFormProps) => {
  const { register } = useFormContext();
  return (
    <>
      <div className={styles.form_row}>
        <TextField
          register={register}
          name={telegramHandlerFormControlName}
          label="Enter Telegram Handle"
          helperText="for booking reminders!"
        />
      </div>
      <div className={styles.btn_groups}>
        <Button onClick={onContinue} type="submit">
          Continue
        </Button>
      </div>
    </>
  );
};

export default SignUpTelegramForm;
