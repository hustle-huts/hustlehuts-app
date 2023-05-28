import { atom } from "recoil";
import { ILoginRequest, IUser } from "@/models/user";

const userState = atom({
  key: "userState",
  default: {} as IUser,
});

const loginDetailsState = atom({
  key: "loginDetailsState",
  default: {
    email: "",
    password: "",
  } as ILoginRequest,
});

export { userState, loginDetailsState };
