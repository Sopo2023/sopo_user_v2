import { LoginResponse, Login } from "src/types/auth/login.types";
import { Sign } from "src/types/auth/signup.type";

export interface AuthRepository {
  login(loginData: LoginParmas): Promise<LoginResponse>;
  signUp(signUpData:SignUpParams): Promise<void>;
  emailNumber(email:string):Promise<emailRespose>;
  refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse>;
}

export interface LoginParmas extends Login{}
export interface emailRespose{
  authCode:string;
}

export interface NewAccessTokenResponse  {
  data:{
    accessToken: string
  }
};

export interface SignUpParams extends Sign{};
