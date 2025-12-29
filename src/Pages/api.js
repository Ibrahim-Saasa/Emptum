import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (URL, formData) => {
  try {
    const response = await fetch(apiUrl + URL, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": `application/json`,
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log(error);
  }
};
