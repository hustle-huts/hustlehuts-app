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
  phone_number?: string;
  telegram_handle?: string;
  hash_password?: string; // Password is optional for social login
  type: UserType;
  provider: UserLoginProvider;
  provider_meta?: Record<string, unknown>;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  data: IUser;
}

export type IRegisterRequest = Omit<
  IUser,
  "_id" | "type" | "hash_password" | "created_at" | "updated_at" | "deleted_at" | "provider" | "provider_meta"
> & { password: string };
