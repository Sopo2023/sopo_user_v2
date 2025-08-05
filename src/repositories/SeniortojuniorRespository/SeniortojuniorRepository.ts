import { 
  SeniortojuniorResponse, 
  SeniortojuniorTypes,
  SeniortojuniorPostData,
  SeniortojuniorUpdateData
} from "src/types/seniortojunior/seniortojunior.type";
import { pageParms } from "src/types/util/pageParms.type";

export interface SeniortojuniorRepository {
  getSeniortojunior(pageParams: pageParms): Promise<SeniortojuniorResponse>;
  getSeniortojuniorById(boardId: number): Promise<SeniortojuniorTypes>;
  createSeniortojunior(data: SeniortojuniorPostData): Promise<void>;
  updateSeniortojunior(data: SeniortojuniorUpdateData): Promise<void>;
  deleteSeniortojunior(boardId: number): Promise<void>;
}
