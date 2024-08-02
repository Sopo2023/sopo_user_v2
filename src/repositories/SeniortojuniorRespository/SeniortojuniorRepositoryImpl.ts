import SOPOAxios from "src/libs/axios/customAxios";
import { SeniortojuniorResponse } from "src/types/seniortojunior/seniortojunior.type";
import {SeniortojuniorRepository ,pageParms} from "./SeniortojuniorRepository";

class SeniortojuniorRepositoryImpl implements SeniortojuniorRepository{
    public async getSeniortojunior(pageParms:pageParms):Promise<SeniortojuniorResponse>{
        try {
            const { data } = await SOPOAxios.get("/board/all",{params:pageParms});
            return data;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}
export default new SeniortojuniorRepositoryImpl;