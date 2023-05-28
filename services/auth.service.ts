import axios_instance from "./axios";
import { ILoginRequest, ILoginResponse, IUser } from "@/models/user";

const AUTH_PREFIX_URL = `/api/auth`;

const loginApi = async (payload: ILoginRequest) => {
  const { data: user, access_token }: ILoginResponse =
    await axios_instance.post(`${AUTH_PREFIX_URL}/login`, payload);
  if (access_token) {
    localStorage.setItem("access_token", access_token);
  }
  return user;
};

const registerApi = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  telegram_handle?: string
) => {
  const { data: user }: { data: IUser } = await axios_instance.post(
    `${AUTH_PREFIX_URL}`,
    {
      first_name,
      last_name,
      email,
      password,
      telegram_handle,
    }
  );
  return user;
};

export { loginApi, registerApi };
