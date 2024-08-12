import { SeniortojuniorResponse, SeniortojuniorTypes } from "src/types/seniortojunior/seniortojunior.type";
import { pageParms } from "src/types/util/pageParms.type";
export interface SeniortojuniorRepository{
    getSeniortojunior(pageParms:pageParms):Promise<SeniortojuniorResponse>
}
