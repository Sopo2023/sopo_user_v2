import { LoginResponse } from "src/types/auth/login.types";
import { 
  AuthRepository, 
  NewAccessTokenResponse, 
  LoginParmas, 
  SignUpParams, 
  emailRespose 
} from "./authRepository";
import config from "src/config/config.json";
import axios from "axios";

class authRepositoryImpl implements AuthRepository {
  public async login(loginData: LoginParmas): Promise<LoginResponse> {
    try {
      const { data } = await axios.post(`${config.server}/auth/sign_in`, loginData);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to login');
    }
  }

  public async signUp(signUpData: SignUpParams): Promise<void> {
    try {
      const { data } = await axios.post(`${config.server}/auth/sign_up`, signUpData);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to sign up');
    }
  }

  public async emailNumber(email: string): Promise<emailRespose> {
    try {
      const { data } = await axios.post(`${config.server}/email?email=${email}`);
      return data;
    } catch (error) {
      console.error( error);
      throw new Error('Failed to verify email');
    }
  }

  public async refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse> {
    try {
      const { data } = await axios.post<NewAccessTokenResponse>(
        `${config.server}/re_provide`,
        refreshToken
      );
      return data;
    } catch (error) {
      console.error('Error occurred during token refresh:', error);
      throw new Error('Failed to refresh access token');
    }
  }
}

export default new authRepositoryImpl();
