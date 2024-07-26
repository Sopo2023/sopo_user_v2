import { Dispatch, SetStateAction } from "react";

export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export interface Login{
  id:string;
  password:string;
}