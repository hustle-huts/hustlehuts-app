import axios_instance from "./axios";
import { ILoginRequest, ILoginResponse, IRegisterRequest, IUser } from "@/models/user";

const AUTH_PREFIX_URL = `/api/auth`;

const authApi = async () => {
  const { data: user }: { data: IUser } = await axios_instance.get(`${AUTH_PREFIX_URL}/auth`);
  return user;
};

const loginApi = async (payload: ILoginRequest) => {
  const { access_token, data: user }: ILoginResponse = await axios_instance.post(`${AUTH_PREFIX_URL}/login`, payload);
  if (access_token) {
    localStorage.setItem("access_token", access_token);
  }
  return user;
};

const registerApi = async (payload: IRegisterRequest) => {
  const { data: user }: { data: IUser } = await axios_instance.post(`${AUTH_PREFIX_URL}`, payload);
  return user;
};

export { authApi, loginApi, registerApi };
