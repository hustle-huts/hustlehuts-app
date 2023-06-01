import { IUser } from "./user";

export interface ICafe {
  _id: string;
  name: string;
  address: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  open_at: string[];
  close_at: string[];
  credit: number;
  has_wifi: boolean;
  has_charging: boolean;
  has_ambience: boolean;
  image_url: string;
  availability_time_slots: {
    date: string;
    time: string[];
    seat: number[];
  }[];
  manager?: IUser;
  rating?: number;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface GetCafeRequest {
  name?: string;
  address?: string;
  credit?: string;
  query?: string;
  page?: number;
  entries_per_page?: number;
  sort_by?: string;
  longitude?: string;
  latitude?: string;
}

export interface PaginatedCafeResult {
  data: ICafe[];
  pagination: {
    current_page: number;
    from: number | null;
    to: number | null;
    per_page: number;
    total: number;
    total_pages: number;
  };
}
