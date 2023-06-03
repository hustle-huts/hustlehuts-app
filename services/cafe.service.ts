import { GetCafeRequest, ICafe, PaginatedCafeResult } from "@/models/cafe";

import axios_instance from "./axios";

const CAFE_PREFIX_URL = `/api/cafe`;

/**
 * Paginated GET request for Cafe API
 * Path: /api/cafe
 *
 * @param options - query params for GET cafe request
 * @returns PaginatedCafeResult - list of cafes and pagination details
 */
const getCafesApi = async (options?: GetCafeRequest): Promise<PaginatedCafeResult> => {
  const queryParams: GetCafeRequest = options || {};

  const data: PaginatedCafeResult = await axios_instance.get(`${CAFE_PREFIX_URL}`, {
    params: queryParams,
  });

  return data;
};

/**
 * Non-paginated GET request for Cafe API
 * Path: /api/cafe/query
 *
 * @param options - query params for GET cafe request
 * @returns ICafe[] - list of cafe objects
 */
const getCafesByQueryApi = async (options?: GetCafeRequest): Promise<ICafe[]> => {
  const queryParams: GetCafeRequest = options || {};

  // Exclude page and entries_per_page from the query parameters if specified as this is non-paginated
  if (queryParams.page !== undefined) {
    delete queryParams.page;
  }
  if (queryParams.entries_per_page !== undefined) {
    delete queryParams.entries_per_page;
  }

  const { data }: { data: ICafe[] } = await axios_instance.get(`${CAFE_PREFIX_URL}/query`, {
    params: queryParams,
  });

  return data;
};

/**
 * GET request on single cafe by ID
 * Path: /api/cafe/{cafe_id}
 *
 * @param cafeId
 * @returns ICafe - single cafe object
 */
const getCafeByIdApi = async (cafeId: string): Promise<ICafe> => {
  const response = await axios_instance.get(`${CAFE_PREFIX_URL}/${cafeId}`);
  return response.data as ICafe;
};

export { getCafeByIdApi, getCafesApi, getCafesByQueryApi };
