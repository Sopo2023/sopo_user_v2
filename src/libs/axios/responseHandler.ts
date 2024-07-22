import { AxiosError } from "axios";
import Token from "../token/token";
import AuthRepositoryImpl from "src/repositories/authRepository/authRepositoryImpl";
import SOPOAxios from "./customAxios";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import { useQueryClient } from "react-query";


let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const ResponseHandler = async (error: AxiosError) => {
  
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

  const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
  const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);

  if (
    status === 401 &&
    usingAccessToken!== undefined &&
    usingRefreshToken!== undefined &&
    !isRefreshing
  ) {
    isRefreshing = true;

    try {
   
      const { accessToken: newAccessToken } =
        await AuthRepositoryImpl.refreshAccessToken({
          refreshToken: usingRefreshToken,
        });
      SOPOAxios.defaults.headers.common[
        REQUEST_TOKEN_KEY
      ] = `Bearer ${newAccessToken}`;
      
      Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

      isRefreshing = false;
      onTokenRefreshed(newAccessToken);
      
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest!.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
          resolve(SOPOAxios(originalRequest!));
        });
      });
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      Token.clearToken();
      window.alert("세션이 만료되었습니다.");
      window.location.href = "/login";
    }
  }
  }

  return Promise.reject(error);
};

export default ResponseHandler;
