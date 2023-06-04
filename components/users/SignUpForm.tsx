import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import styles from "@/styles/SignUpForm.module.css";

import CloseEyeIcon from "../shared/CustomIcons";
import {
  emailFormControlName,
  firstNameFormControlName,
  lastNameFormControlName,
  passwordFormControlName,
  phoneNumberFormControlName,
} from "./utils/constants";

type SignUpFormProps = {
  onContinue: () => void;
};

const SignUpForm = ({ onContinue }: SignUpFormProps) => {
  const { register, formState } = useFormContext();
  const { errors, isValid } = formState;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
          type={showPassword ? "text" : "password"}
          isRequired={true}
          label="Enter Your Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{
                    color: "transparent",
                  }}
                >
                  <CloseEyeIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: "+65",
          }}
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
