import SOPOAxios from "src/libs/axios/customAxios";
import { SeniortojuniorResponse } from "src/types/seniortojunior/seniortojunior.type";
import {SeniortojuniorRepository} from "./SeniortojuniorRepository";

class SeniortojuniorRepositoryImpl implements SeniortojuniorRepository{
    public async getSeniortojunior():Promise<SeniortojuniorResponse>{
        try {
            const { data } = await SOPOAxios.get("/board/all");
            return data;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}
export default new SeniortojuniorRepositoryImpl;