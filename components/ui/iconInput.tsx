import React, { ReactElement, ReactNode, TextareaHTMLAttributes, useState } from "react";
import styles from './input.module.css';
import classnames from "classnames";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Box, InputAdornment, FormHelperText, Icon, Input } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import { MouseEventHandler } from "react";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import PhoneInput from 'react-phone-input-2'
interface Props
    extends Partial<React.InputHTMLAttributes<any>>,
    Partial<TextareaHTMLAttributes<any>> {
    className?: string;
    variation?: "primary" | "secondary";
    placeholder?: string;
    children?: any;
    icon?: React.ReactNode;
    name?: string;
    error?: any;
    touched?: any;
    formHelper?: string;
    value?: string;
    label?: string;
    password?: boolean;
    passwordVisibility?: boolean;
    onClickEvent?: MouseEventHandler;
    onMouseDownEvent?: MouseEventHandler;
    phone?: any;
    isRequired?: boolean;
    prefixicon?: string | ReactElement | ReactNode;
}

const IconInput: React.FC<Props> = (Props) => {
    const {
        className,
        type,
        passwordVisibility,
        variation = "primary",
        children,
        formHelper,
        name,
        error,
        password = false,
        phone = false,
        touched,
        onClickEvent,
        onMouseDownEvent,
        value,
        placeholder,
        label,
        isRequired,
        prefixicon,
        ...rest
    } = Props;

    const [phoneValue, setPhoneValue] = useState("3424234");
    function handleOnChange(f: string) {
        setPhoneValue(f);
    }

    const IconInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-root': {
            borderRadius: '14px',
            background: '#FFFFFF',
            border: '1px solid #F0F0F0',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:focus': {
                borderColor: theme.palette.primary.main,
            },
        },
    }));

    if (password) {
        return (
            <FormControl
                fullWidth
                sx={{
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '90%',
                    marginBottom: '12px'
                }}
                variant="standard">
                <InputLabel
                    required={isRequired}
                    sx={{
                        fontFamily: 'inherit',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#1F1F1F'
                    }}
                    shrink htmlFor="icon-input">
                    {Props.label}
                </InputLabel>
                <IconInput
                    type={passwordVisibility ? "text" : "password"}
                    required={isRequired}
                    sx={{
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        border: '1px solid #F0F0F0',
                        fontSize: 16,
                        padding: '10px 12px',
                    }}
                    endAdornment={
                        <InputAdornment
                            position="end"
                            sx={{
                                width: 'fit-content'
                            }}
                        >
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={onClickEvent}
                                onMouseDown={onMouseDownEvent}
                                edge="end"
                                {...rest}
                            >
                                {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    defaultValue=""
                    id="icon-input" />
            </FormControl>
        );
    }

    if (!phone) {
        return (
            <FormControl
                fullWidth
                sx={{
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '90%',
                    marginBottom: '12px'
                }}
                variant="standard">
                <InputLabel
                    required={isRequired}
                    sx={{
                        fontFamily: 'inherit',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#1F1F1F'
                    }}
                    shrink htmlFor="icon-input">
                    {Props.label}
                </InputLabel>
                <IconInput
                    value={value}
                    required={isRequired}
                    sx={{
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        border: '1px solid #F0F0F0',
                        fontSize: 16,
                        padding: '10px 12px',


                    }}
                    endAdornment={
                        <InputAdornment
                            position="end"
                            sx={{
                                width: 'fit-content'
                            }}
                        >
                            <Icon>{Props.icon}</Icon>
                        </InputAdornment>
                    }
                    defaultValue=""
                    id="icon-input" />
                     {formHelper ? <FormHelperText id="component-helper-text">
          {Props.formHelper}
        </FormHelperText> : ""}
            </FormControl>
        );
    } else {
        return (
            <>
                <div className={styles.form_group} style={{ marginBottom: '10px' }}>
                    {label && <label className={classnames(styles.form_label)}>
                        {label}
                        {isRequired && <span className={styles.required}>*</span>}
                    </label>}
                    {prefixicon && <span className="input-icon">{prefixicon}</span>}
                    <PhoneInput placeholder=''
                        country={"sg"}
                        dropdownClass={classnames(error && styles.error_input, styles.phone)}
                        inputClass={classnames(error && styles.error_input, styles.phone)}
                        containerStyle={{ borderRadius: "14px !important" }}
                        buttonStyle={{ borderRadius: "14px !important" }}
                        inputStyle={{ borderRadius: "14px !important", padding: "0px 10px" }}
                        containerClass={classnames(error && styles.error_input, styles.phone)}
                        // value="029293"
                        // onChange={phone => handleOnChange(phone)}
                        onBlur={() => { }}
                        specialLabel=''
                        disabled={false}
                    />
                    {error && <span className={error && styles.error_message}>{error}</span>}
                </div>
            </>
        )
    }

};

export default IconInput;