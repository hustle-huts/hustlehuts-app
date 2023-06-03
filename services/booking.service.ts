import { CreateBookingRequest, GetBookingRequest, IBooking, PaginatedBookingResult } from "@/models/booking";

import axios_instance from "./axios";

const BOOKING_PREFIX_URL = `/api/booking`;

/**
 * POST request for creating bookings
 * Path: /api/booking
 *
 * @param requestBody for CreateBookingRequest
 * @returns IBooking - Single booking object
 */
const createBookingApi = async (requestBody: CreateBookingRequest): Promise<IBooking> => {
  const response = await axios_instance.post(`${BOOKING_PREFIX_URL}`, requestBody);
  return response.data as IBooking;
};

/**
 * Paginated GET request for retrieving bookings
 * Path: /api/booking
 *
 * @param options - query params for GET bookings request
 * @returns PaginatedBookingResult - list of bookings with pagination details
 */
const getBookingsApi = async (options?: GetBookingRequest): Promise<PaginatedBookingResult> => {
  const queryParams: GetBookingRequest = options || {};

  const data: PaginatedBookingResult = await axios_instance.get(`${BOOKING_PREFIX_URL}`, {
    params: queryParams,
  });

  return data;
};

/**
 * Non-paginated GET request to retrieve bookings by user
 * Path: /api/booking/user
 *
 * @returns IBooking - Single booking object
 */
const getUserBookingsApi = async (): Promise<IBooking[]> => {
  const { data: bookings }: { data: IBooking[] } = await axios_instance.get(`${BOOKING_PREFIX_URL}/user`);
  return bookings;
};

/**
 * Non-paginated GET request to retrieve bookings by its booking id
 * @param bookingId
 * @returns IBooking - Single booking object
 */
const getBookingByIdApi = async (bookingId: string): Promise<IBooking> => {
  const { data: booking }: { data: IBooking } = await axios_instance.get(`${BOOKING_PREFIX_URL}/${bookingId}`);
  return booking;
};

export { createBookingApi, getBookingByIdApi, getBookingsApi, getUserBookingsApi };
