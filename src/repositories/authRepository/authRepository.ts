import { LoginResponse } from "src/types/auth/login.types";
import { Sign } from "src/types/auth/signup.type";

export interface AuthRepository {
  login(loginData: Login): Promise<LoginResponse>;
  signUp(signUpData:SignUpParams): Promise<void>;
  refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse>;
}

export interface Login {
  id: string;
  password: string;
};

export interface NewAccessTokenResponse  {
  accessToken: string
};

export interface SignUpParams extends Sign{};
