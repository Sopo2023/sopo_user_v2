import CONFIG from "src/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
import requestInterceptor from "./requestHandler";
import ResponseHandler from "./responseHandler";
import Token from "../token/token";
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";


const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: CONFIG.server,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
};

const SOPOAxios = axios.create(axiosRequestConfig);


SOPOAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

SOPOAxios.interceptors.response.use((res) => res, ResponseHandler);


export default SOPOAxios;

export const setAccessToken = (token: string) => {
  SOPOAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
