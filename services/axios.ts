import axios from "axios";
import _ from "lodash";

const axios_instance = axios.create({ baseURL: process.env.API_URL });
axios_instance.interceptors.request.use((config) => {
  console.log("Making request to " + config.url);
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

axios_instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(error);
    const default_error = _.get(error, "response.data.errors", error);
    const final_error = _.get(error, "response.data.error", default_error);
    console.error("final_error", final_error);
    let error_string = final_error;
    if (typeof final_error === "object") {
      error_string = JSON.stringify(final_error);
    }
    throw error_string;
  },
);

export default axios_instance;
