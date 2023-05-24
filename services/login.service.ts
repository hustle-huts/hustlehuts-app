import axios_instance from "./axios";

const PREFIX_URL = `/api/auth`;

const loginApi = async (email: string, password: string) => {
  try {
    const response = await axios_instance.post(`${PREFIX_URL}/login`, {
      email,
      password,
    });
    return response.data;
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
    const response = await axios_instance.post(`${PREFIX_URL}`, {
      first_name,
      last_name,
      email,
      password,
      telegram_handle,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { loginApi, registerApi };
