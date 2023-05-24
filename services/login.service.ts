const BASE_URL = `${process.env.API_URL}/api/auth`;

export const loginApi = async (email: string, password: string) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
};

export const registerApi = async (
  email: string,
  password: string,
  name: string
) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
  });
  const data = await response.json();
  return data;
};
