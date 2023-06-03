import * as yup from "yup";

import { loginFormErrorMessages, signUpFormErrorMessages } from "./constants";

export const loginEmailFormSchema = yup.object().shape({
  email: yup.string().email(loginFormErrorMessages.INVALID_EMAIL).required(loginFormErrorMessages.REQUIRED_EMAIL),
});

export const loginPasswordFormSchema = yup.object().shape({
  password: yup.string().required(loginFormErrorMessages.REQUIRED_PASSWORD),
});

export const signUpFormSchema = yup.object().shape({
  first_name: yup.string().required(signUpFormErrorMessages.REQUIRED_FIRST_NAME),
  last_name: yup.string().required(signUpFormErrorMessages.REQUIRED_LAST_NAME),
  email: yup.string().email(signUpFormErrorMessages.INVALID_EMAIL).required(signUpFormErrorMessages.REQUIRED_EMAIL),
  password: yup.string().required(signUpFormErrorMessages.REQUIRED_PASSWORD),
  phone_number: yup
    .string()
    .required(signUpFormErrorMessages.REQUIRED_PHONE_NUMBER)
    .matches(/^[0-9]{8}$/, signUpFormErrorMessages.INVALID_PHONE_NUMBER),
  telegram_handler: yup.string(),
});
