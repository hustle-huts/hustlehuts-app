import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import styles from "./button.module.css";
import classNames from "classnames";

type CustomButtonProps = MUIButtonProps & {
  btnType?: "primary" | "secondary" | "social";
};

const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  const { btnType = "primary", className, children, ...rest } = props;
  const buttonStyling = rest.disabled ? styles.disabled : styles[btnType];

  return (
    <Button
      {...rest}
      className={classNames(className, buttonStyling)}
      sx={{
        fontFamily: "inherit",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "27px",
        padding: "16px 0",
        borderRadius: "12px",
        boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.18)",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
