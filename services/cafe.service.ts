import axios_instance from "./axios";
import { ICafe, PaginatedCafeResult } from "@/models/cafe";

const CAFE_PREFIX_URL = `/api/cafe`;


/**
 * Paginated GET request for Cafe API
 * Path: /api/cafe
 * 
 * @param name 
 * @param address 
 * @param credit 
 * @param query 
 * @param page 
 * @param entries_per_page 
 * @param sort_by 
 * @param longitude 
 * @param latitude 
 * @returns PaginatedCafeResult - list of cafes and pagination details
 */
const getCafesApi = async (
  name?: string,
  address?: string,
  credit?: string,
  query?: string,
  page?: number,
  entries_per_page?: number,
  sort_by?: string,
  longitude?: string,
  latitude?: string
): Promise<PaginatedCafeResult> => {
  const params: Record<string, string | number | undefined> = {
    name,
    address,
    credit,
    query,
    page,
    entries_per_page,
    sort_by,
    longitude,
    latitude,
  };

    // Remove undefined parameters from queryParams if they are not specified
    Object.keys(params).forEach((key) =>
    params[key] === undefined ? delete params[key] : {}
  );

  const response = await axios_instance.get(`${CAFE_PREFIX_URL}`, {
    params,
  });
  return response.data as PaginatedCafeResult;
};


/**
 * Non-paginated GET request for Cafe API
 * Path: /api/cafe/query
 * 
 * @param name 
 * @param address 
 * @param credit 
 * @param query 
 * @param sort_by 
 * @param longitude 
 * @param latitude 
 * @returns ICafe[] - list of cafe objects
 */
const getCafesByQueryApi = async (
    name?: string,
    address?: string,
    credit?: string,
    query?: string,
    sort_by?: string,
    longitude?: string,
    latitude?: string
  ): Promise<ICafe[]> => {
    const params: Record<string, string | undefined> = {
      name,
      address,
      credit,
      query,
      sort_by,
      longitude,
      latitude,
    };
  
    // Remove undefined parameters from queryParams if they are not specified
    Object.keys(params).forEach((key) =>
      params[key] === undefined ? delete params[key] : {}
    );
  
    const response = await axios_instance.get(`${CAFE_PREFIX_URL}`, {
      params,
    });
    return response.data as ICafe[];
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
  

export { getCafesApi, getCafesByQueryApi, getCafeByIdApi };
