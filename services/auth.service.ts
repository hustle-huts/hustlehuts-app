import { ILoginRequest, ILoginResponse, IRegisterRequest, IUser } from "@/models/user";

import axios_instance from "./axios";

const AUTH_PREFIX_URL = `/api/auth`;

const authApi = async (): Promise<IUser> => {
  const { data: user }: { data: IUser } = await axios_instance.get(`${AUTH_PREFIX_URL}/auth`);
  return user;
};

const loginApi = async (payload: ILoginRequest): Promise<IUser> => {
  const { access_token, data: user }: ILoginResponse = await axios_instance.post(`${AUTH_PREFIX_URL}/login`, payload);
  if (access_token) {
    localStorage.setItem("access_token", access_token);
  }
  return user;
};

const registerApi = async (payload: IRegisterRequest): Promise<IUser> => {
  const { data: user }: { data: IUser } = await axios_instance.post(`${AUTH_PREFIX_URL}`, payload);
  return user;
};

const logoutApi = async (): Promise<boolean> => {
  const { data: is_logout }: { data: boolean } = await axios_instance.post(`${AUTH_PREFIX_URL}/logout`);
  localStorage.removeItem("access_token");
  return is_logout;
};

export { authApi, loginApi, logoutApi, registerApi };
