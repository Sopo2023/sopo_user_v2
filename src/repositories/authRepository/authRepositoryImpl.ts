import { LoginResponse } from "src/types/auth/login.types";
import { Login } from "./authRepository";
import config from "src/config/config.json"
import axios from "axios";

class authRepository implements authRepository{
    public async login(loginData: Login): Promise<LoginResponse>{
        const { data } = await axios.post(`${config.server}/auth`, loginData);
        return data;
    }
}
export default new authRepository();