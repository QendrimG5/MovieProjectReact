import { axiosInstance } from "../../api/index";

export default function setAuthorizationToken(token) {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
}
