import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";

import styles from "./textfield.module.css";

type TextFieldProps = Omit<MUITextFieldProps, "variant"> & {
  name: string;
  register: ReturnType<typeof useFormContext>["register"];
  isRequired?: boolean;
  value?: string | number;
  errorText?: string;
  variant?: "outlined" | "standard" | "filled";
};

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { register, name, variant = "outlined", label, isRequired, errorText, helperText = "", ...rest } = props;
  return (
    <div className={styles.form_group}>
      {label && (
        <label className={styles.form_label}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <MUITextField
        {...rest}
        {...register(name)}
        variant={variant}
        error={!!errorText}
        helperText={errorText ?? helperText}
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
          "& .MuiFormHelperText-root": {
            fontFamily: "inherit",
            fontWeight: 400,
            fontSize: "10px",
            lineHeight: "12px",
            color: "#000000",
          },
          "& .Mui-error": {
            textAlign: "end",
            paddingRight: "20px",
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
