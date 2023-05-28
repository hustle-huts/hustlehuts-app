import { atom } from "recoil";
import { IUser } from "@/types/user";

const userState = atom({
  key: "userState",
  default: {} as IUser,
});

export { userState };
