import React, { ButtonHTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from "react";

import styles from "./button.module.css";

interface Props extends ButtonHTMLAttributes<any> {
  className?: string;
  icon?: string | ReactElement | ReactNode;
  affixicon?: string | ReactElement | ReactNode;
  btntype?: "primary" | "secondary" | "outline" | "login" | "tertiary";
  size?: "large" | "medium";
  children?: any;
  onClick?: MouseEventHandler<any> | undefined;
}

const Button: React.FC<Props> = (Props) => {
  const { className, icon, affixicon, btntype = "primary", size, onClick = () => {}, children, ...rest } = Props;

  return (
    <div>
      <button
        className={btntype === "primary" ? styles.primary : btntype === "secondary" ? styles.secondary : styles.outline}
        onClick={onClick}
        disabled={rest.disabled}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
        {affixicon && <span className="icon-holder right">{affixicon}</span>}
      </button>
    </div>
  );
};

export default Button;
