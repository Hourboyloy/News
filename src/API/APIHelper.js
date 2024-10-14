import axios from "axios";
export const HandleApi = async (method, url, data = {}, token = null) => {
  try {
    const config = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      data,
    };
    const response = await axios(config);
    return response.data; // Return the response data
  } catch (error) {
    console.error("API request failed:", error);
    throw error.response ? error.response.data : error;
  }
};
