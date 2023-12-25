import axios from "axios";

const lang = localStorage.getItem("lang")
  ? JSON.parse(localStorage.getItem("lang"))
  : "ar";
const client = axios.create({
  baseURL: "https://admin.mazen.com.sa/api",
  headers: {
    "Content-Type": "application/json",
    lang,
  },
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
