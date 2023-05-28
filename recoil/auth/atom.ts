import { atom } from "recoil";
import { ILoginRequest, IRegisterRequest, IUser } from "@/models/user";

export const userState = atom({
  key: "userState",
  default: {} as IUser,
});

export const loginDetailsState = atom({
  key: "loginDetailsState",
  default: {
    email: "",
    password: "",
  } as ILoginRequest,
});

export const registerDetailsState = atom({
  key: "registerDetailsState",
  default: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    telegram_handle: "",
  } as IRegisterRequest,
});
