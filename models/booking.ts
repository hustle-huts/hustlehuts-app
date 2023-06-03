import { ICafe } from "./cafe";
import { IUser } from "./user";

export interface IBooking {
  _id: string;
  user: IUser;
  cafe: ICafe;
  slots: {
    date: string;
    time: string[];
    seat: number;
  }[];
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface CreateBookingRequest {
  cafe: string;
  slots: {
    date: string;
    time: string[];
    seat: number;
  }[];
  deleted_at?: string;
  created_at: string;
  updated_at: string;
}

export interface GetBookingRequest {
  query?: string;
  page?: number;
  entries_per_page?: number;
  sort_by?: string;
  cafe_id?: string;
}

export interface PaginatedBookingResult {
  data: IBooking[];
  pagination: {
    current_page: number;
    from: number | null;
    to: number | null;
    per_page: number;
    total: number;
    total_pages: number;
  };
}
