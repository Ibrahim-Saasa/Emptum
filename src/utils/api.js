import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const getToken = () => {
  return (
    sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken")
  );
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
    console.log(error);
    return error;
  }
};

export const editData = async (url, updatedData) => {
  try {
    const token = getToken();

    console.log("=== Edit Data Debug ===");
    console.log("Full URL:", apiUrl + url);
    console.log("Token exists:", !!token);

    if (!token) {
      throw new Error("No authentication token found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // ✅ If it's FormData, don't set Content-Type (axios handles it)
    if (updatedData instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    console.log("Request headers:", config.headers);

    const response = await axios.put(apiUrl + url, updatedData, config);
    console.log("Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("=== Edit Data Error ===");
    console.error("Error status:", error.response?.status);
    console.error("Error message:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      console.error("401 Unauthorized - Token might be invalid or expired");
    }

    throw error;
  }
};

// ✅ NEW: Upload function specifically for files
export const uploadFile = async (url, formData) => {
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
    console.error("Upload error:", error.response?.data || error.message);
    throw error;
  }
};
