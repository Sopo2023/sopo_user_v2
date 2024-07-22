import { LoginResponse } from "src/types/auth/login.types";

export interface AuthRepository {
  login(loginData: Login): Promise<LoginResponse>;
  refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse>;
}

export interface Login {
  email: string;
  password: string;
}

export interface NewAccessTokenResponse  {
  accessToken: string
}
