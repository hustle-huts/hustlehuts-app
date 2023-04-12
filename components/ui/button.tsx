import React, { ButtonHTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from "react";
import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<any> {
  className?: string;
  icon?: string | ReactElement | ReactNode;
  affixicon?: string | ReactElement | ReactNode;
  btntype?: "primary" | "secondary" | "outline";
  size?: "large" | "medium";
  children?: any;
  clickEvent?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (Props) => {
  const {
    className,
    icon,
    affixicon,
    btntype = "primary",
    size,
    clickEvent,
    children,
    ...rest
  } = Props;
  return (
    <div >
      <button onClick={clickEvent} className={btntype === "primary" ? styles.primary : btntype === "secondary" ? styles.secondary : styles.outline}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
        {affixicon && <span className="icon-holder right">{affixicon}</span>}
      </button>
    </div>
  );
};

export default Button;

