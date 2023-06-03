import { atom } from "recoil";

import { ILoginRequest, IUser } from "@/models/user";

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
