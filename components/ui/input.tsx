import React, { ReactElement, ReactNode, TextareaHTMLAttributes } from "react";
import styles from './input.module.css';
import classnames from "classnames";
interface Props
  extends Partial<React.InputHTMLAttributes<any>>,
    Partial<TextareaHTMLAttributes<any>> {
  className?: string;
  variation?: "primary" | "secondary";
  placeholder?: string;
  children?: any;
  name?: string;
  error?: any;
  touched?: any;
  value?: string;
  label?: string;
  isRequired?: boolean;
  prefixicon?: string | ReactElement | ReactNode;
}

const Input: React.FC<Props> = (Props) => {
  const {
    className,
    type = "text",
    variation = "primary",
    children,
    name,
    error,
    touched,
    value,
    placeholder,
    label,
    isRequired,
    prefixicon,
    ...rest
  } = Props;
  return (
    <div className={styles.form_group}>
      {label && <label className={classnames(styles.form_label)}>
        {label}
        {isRequired && <span className={styles.required}>*</span>}
        </label>}
      {prefixicon && <span className="input-icon">{prefixicon}</span>}
      <input 
        type={type}
        className={classnames(styles.input, error  && styles.error_input)}
        placeholder={placeholder}
        {...rest}
      >
        {children}
      </input>
      {error  && <span className={error && styles.error_message}>{error}</span>}
    </div>
  );
};

export default Input;