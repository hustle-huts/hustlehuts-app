export const emailFormControlName = "email";
export const passwordFormControlName = "password";
export const firstNameFormControlName = "first_name";
export const lastNameFormControlName = "last_name";
export const telegramHandlerFormControlName = "telegram_handler";
export const phoneNumberFormControlName = "phone_number";

export const loginFormErrorMessages = {
  INVALID_EMAIL: "Only alphabetical characters allowed!",
  REQUIRED_EMAIL: "Email is required!",
  REQUIRED_PASSWORD: "Password is required!",
};

export const signUpFormErrorMessages = {
  ...loginFormErrorMessages,
  REQUIRED_FIRST_NAME: "First name is required!",
  REQUIRED_LAST_NAME: "Last name is required!",
  REQUIRED_PHONE_NUMBER: "Phone number is required!",
  INVALID_PHONE_NUMBER: "Only 8 digits allowed!",
};

export enum SignUpStep {
  FORM = "FORM",
  TELEGRAM = "TELEGRAM",
  SUCCESS = "SUCCESS",
}
