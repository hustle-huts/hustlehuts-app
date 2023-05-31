import React, { ReactElement, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from "@mui/material";

import styles from "./textfield.module.css";

type TextFieldProps = MUITextFieldProps & {
  name: string;
  register: ReturnType<typeof useFormContext>["register"];
  isRequired?: boolean;
  prefixicon?: string | ReactElement | ReactNode;
  value?: string | number;
};

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const {
    register,
    name,
    variant = "outlined",
    label,
    isRequired,
    prefixicon,
    ...rest
  } = props;
  return (
    <div className={styles.form_group}>
      {label && (
        <label className={styles.form_label}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      {prefixicon && <span className="input-icon">{prefixicon}</span>}
      <MUITextField
        {...rest}
        {...register(name)}
        variant={variant}
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
          "& .MuiFormHelperText-root.Mui-error": {
            textAlign: "end",
            paddingRight: "20px",
            fontFamily: "inherit",
            fontWeight: 400,
            fontSize: "10px",
            lineHeight: "12px",
            marginTop: "4px",
            color: "#FF2020",
          },
          "& .MuiInputAdornment-root": {
            width: "auto",
            margin: "0 0 0 10px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "14px",
              border: "1px solid #CDCCCC",
            },
            "&:hover fieldset": {
              border: "1px solid #DC9959",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #DC9959",
            },
            "&.Mui-error fieldset": {
              borderColor: "#FF2020",
            },
          },
        }}
      />
    </div>
  );
};

export default TextField;
