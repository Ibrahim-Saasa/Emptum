import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const getToken = () => {
  return (
    sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken")
  );
};

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(apiUrl + "/api/users/refresh-token", {
      refreshToken: refreshToken,
    });

    if (response.data.success) {
      const newAccessToken = response.data.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      return newAccessToken;
    }

    throw new Error("Token refresh failed");
  } catch (error) {
    // If refresh fails, redirect to login
    localStorage.clear();
    window.location.href = "/login";
    throw error;
  }
};

export const uploadFile = async (url, formData, retryCount = 0) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await axios.put(apiUrl + url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    // If 401 error and we haven't retried yet, try refreshing token
    if (error.response?.status === 401 && retryCount === 0) {
      console.log("Token expired, attempting refresh...");

      try {
        const newToken = await refreshAccessToken();

        // Retry the upload with new token
        const response = await axios.put(apiUrl + url, formData, {
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data;
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        throw new Error("Session expired. Please log in again.");
      }
    }

    console.error("Upload error:", error.response?.data || error.message);
    throw error;
  }
};

export const postData = async (URL, formData) => {
  try {
    const token = getToken();
    const response = await fetch(apiUrl + URL, {
      method: "POST",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // If 401, try refreshing token
    if (response.status === 401) {
      const newToken = await refreshAccessToken();

      // Retry with new token
      const retryResponse = await fetch(apiUrl + URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${newToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      return await retryResponse.json();
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      success: false,
      error: true,
      message: "Network error. Please try again.",
    };
  }
};

export const fetchDataFromApi = async (URL) => {
  try {
    const token = getToken();
    const params = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(apiUrl + URL, params);
    return data;
  } catch (error) {
    // If 401, try refreshing
    if (error.response?.status === 401) {
      try {
        const newToken = await refreshAccessToken();
        const { data } = await axios.get(apiUrl + URL, {
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type": "application/json",
          },
        });
        return data;
      } catch (refreshError) {
        console.error("Token refresh failed");
      }
    }
    console.log(error);
    return error;
  }
};

export const editData = async (url, updatedData) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (updatedData instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    const response = await axios.put(apiUrl + url, updatedData, config);
    return response.data;
  } catch (error) {
    // If 401, try refreshing
    if (error.response?.status === 401) {
      try {
        const newToken = await refreshAccessToken();
        const response = await axios.put(apiUrl + url, updatedData, {
          headers: {
            Authorization: `Bearer ${newToken}`,
            ...(updatedData instanceof FormData && {
              "Content-Type": "multipart/form-data",
            }),
          },
        });
        return response.data;
      } catch (refreshError) {
        throw new Error("Session expired. Please log in again.");
      }
    }

    throw error;
  }
};
