import axios_instance from "./axios";
import { ILoginResponse, IUser } from "@/types/user";

const AUTH_PREFIX_URL = `/api/auth`;

const loginApi = async (email: string, password: string) => {
  try {
    const { data: user, access_token }: ILoginResponse =
      await axios_instance.post(`${AUTH_PREFIX_URL}/login`, {
        email,
        password,
      });

    if (access_token) {
      localStorage.setItem("access_token", access_token);
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};

const registerApi = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  telegram_handle?: string
) => {
  try {
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
  } catch (error) {
    console.error(error);
  }
};

export { loginApi, registerApi };
