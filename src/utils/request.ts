import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "http://127.0.0.1";
axios.defaults.baseURL = baseUrl;

export default function request(
  url: string,
  type: AxiosRequestConfig["method"] = "post",
  data = {},
  params = {}
) {
  return new Promise((resolve, reject) => {
    const tokenString = window.localStorage.getItem("access_token");
    axios.defaults.headers["Authorization"] = tokenString;
    let options: AxiosRequestConfig = {
      url,
      method: type,
      data,
      params,
      timeout: 10000,
      headers: {},
    };
    axios(options)
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          alert(`请求失败`);
          reject(response);
        }
      })
      .catch((response) => {
        if (response?.response?.status === 401) {
          alert("登陆凭证过期，请重新登陆！");
          window.localStorage.removeItem("access_token");
        }
        reject(response);
      });
  });
}
