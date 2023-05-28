export enum UserType {
  CAFE = "cafe",
  CUSTOMER = "customer",
}

export enum UserLoginProvider {
  EMAIL = "email",
  GOOGLE = "google",
  FACEBOOK = "facebook",
}

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  hash_password?: string; // Password is optional for social login
  type: UserType;
  telegram_handle?: string;
  provider: UserLoginProvider;
  provider_meta?: Record<string, unknown>;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface ILoginResponse {
  access_token: string;
  data: IUser;
}
