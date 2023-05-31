import * as yup from "yup";
import { loginFormErrorMessages } from "./constants";

export const loginEmailFormSchema = yup.object().shape({
  email: yup.string().email(loginFormErrorMessages.INVALID_EMAIL).required(loginFormErrorMessages.REQUIRED_EMAIL),
});

export const loginPasswordFormSchema = yup.object().shape({
  password: yup.string().required(loginFormErrorMessages.REQUIRED_PASSWORD),
});
