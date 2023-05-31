import axios_instance from "./axios";
import { IBooking, CreateBookingRequest, PaginatedBookingResult, GetBookingRequest } from "@/models/booking";

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
 const getBookingsApi = async (
    options?: GetBookingRequest
  ): Promise<PaginatedBookingResult> => {
    const queryParams: GetBookingRequest = options || {};
  
    const response = await axios_instance.get(`${BOOKING_PREFIX_URL}`, {
      params: queryParams,
    });
    return response.data as PaginatedBookingResult;
};

/**
 * Non-paginated GET request to retrieve bookings by user
 * Path: /api/booking/user
 * 
 * @returns IBooking - Single booking object
 */
const getUserBookingsApi = async (): Promise<IBooking[]> => {
    const response = await axios_instance.get(`${BOOKING_PREFIX_URL}/user`);
    return response.data as IBooking[];
};

/**
 * Non-paginated GET request to retrieve bookings by its booking id
 * @param bookingId 
 * @returns IBooking - Single booking object
 */
const getBookingByIdApi = async (bookingId: string): Promise<IBooking> => {
    const response = await axios_instance.get(`${BOOKING_PREFIX_URL}/${bookingId}`);
    return response.data as IBooking;
};

export { createBookingApi, getBookingsApi, getUserBookingsApi, getBookingByIdApi };