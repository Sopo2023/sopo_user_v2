import { SeniortojuniorResponse, SeniortojuniorTypes } from "src/types/seniortojunior/seniortojunior.type";

export interface SeniortojuniorRepository{
    getSeniortojunior(pageParms:pageParms):Promise<SeniortojuniorResponse>
}
export interface pageParms{
    page:number;
    size:number;
}
