import request from "../utils/request";

const requestPath = {
  login: "/api/login",
};

const loginApi = {
  login: (data: {}) => {
    return request(requestPath.login, "post", data);
  },
};

export default loginApi;
