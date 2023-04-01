import React, { ReactElement, ReactNode, TextareaHTMLAttributes, useState } from "react";
import styles from './input.module.css';
import classnames from "classnames";
import PhoneInput from 'react-phone-input-2'
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
  phone?: any;
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
    phone = false,
    touched,
    value,
    placeholder,
    label,
    isRequired,
    prefixicon,
    ...rest
  } = Props;
  const [phoneValue, setPhoneValue] = useState("3424234");
  function handleOnChange(f:string) {
    setPhoneValue(f);
 }
  if(!phone) {
    return( 
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
  } else {
    return ( 
    <> 
    <div className={styles.form_group} style={{marginBottom: '10px'}}>
        {label && <label className={classnames(styles.form_label)}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
          </label>}
        {prefixicon && <span className="input-icon">{prefixicon}</span>}
        <PhoneInput placeholder=''
              country={"sg"}
              dropdownClass={classnames(error  && styles.error_input, styles.phone)}
              inputClass={classnames(error  && styles.error_input, styles.phone)}
              containerStyle={{borderRadius: "14px !important"}}
              buttonStyle={{borderRadius: "14px !important"}}
              inputStyle={{borderRadius: "14px !important", padding: "0px 10px"}}
              containerClass={classnames(error  && styles.error_input, styles.phone)}
              // value="029293"
              // onChange={phone => handleOnChange(phone)}
              onBlur={()=>{}} 
              specialLabel=''
              disabled = {false}
        />
        {error  && <span className={error && styles.error_message}>{error}</span>}
      </div>
</>
  )
}
  
};

export default Input;