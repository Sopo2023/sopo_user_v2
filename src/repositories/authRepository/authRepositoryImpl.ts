import { LoginResponse } from "src/types/auth/login.types";
import { AuthRepository, NewAccessTokenResponse, Login, SignUpParams } from "./authRepository";
import config from "src/config/config.json"
import axios from "axios";

class authRepositoryImpl implements AuthRepository{
    public async login(loginData: Login): Promise<LoginResponse>{
        const { data } = await axios.post(`${config.server}/auth`, loginData);
        return data;
    }
    public async signUp(signUpData:SignUpParams ):Promise<void>{
      const {data} = await axios.post(`${config.server}/sign`,signUpData)
      return data;
    }
    
    public async refreshAccessToken(refreshToken: {
        refreshToken: string;
      }): Promise<NewAccessTokenResponse> {
        const { data } = await axios.post<NewAccessTokenResponse>(
          `${config.server}/auth/refresh`,
          refreshToken
        );
        return data;
      }
    

}
export default new authRepositoryImpl();