import { atom } from "recoil";
import { IUser } from "@/models/user";

const userState = atom({
  key: "userState",
  default: {} as IUser,
});

export { userState };
