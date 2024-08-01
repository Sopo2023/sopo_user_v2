import { SeniortojuniorResponse, SeniortojuniorTypes } from "src/types/seniortojunior/seniortojunior.type";

export interface SeniortojuniorRepository{
    getSeniortojunior():Promise<SeniortojuniorResponse>
}
// export interface SeniortojuniorPrpos{
//     page:
// }
