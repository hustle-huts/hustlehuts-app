import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import classNames from "classnames";

import styles from "./button.module.css";

type ButtonProps = MUIButtonProps & {
  btnType?: "primary" | "secondary" | "social";
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { btnType = "primary", className, children, ...rest } = props;
  const buttonStyling = rest.disabled ? styles.disabled : styles[btnType];

  return (
    <MUIButton
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
    </MUIButton>
  );
};

export default Button;
