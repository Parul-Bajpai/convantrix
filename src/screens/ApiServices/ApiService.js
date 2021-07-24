import axios from "axios";
const baseURL = "https://convantrix.herokuapp.com/";

axios.defaults.headers.common = { w_auth: localStorage.getItem("w_auth") };

export function login(data) {
  return axios.post(baseURL + "auth/login", data).then((result) => {
    localStorage.setItem("w_auth", result.data.token);
    if (result.data.loginSuccess) {
      window.location.replace("/admin/requirementsList");
    } else {
      alert("login failed");
    }
  });
}

export function resetPassword(data) {
  return axios.post(baseURL + "auth/reset", data).then((result) => {
    console.log("result", result);
  });
}

export const getQuotes = async () => {
  const response = await axios
    .get(baseURL + "api/quotes/getQuotes")
    .then((res) => {
      return res;
    });
  return response;
};

export const createQuote = async (data) => {
  const response = await axios
    .post(baseURL + "api/quotes/createQuote", data)
    .then((res) => {
      return res;
    });
  return response;
};
