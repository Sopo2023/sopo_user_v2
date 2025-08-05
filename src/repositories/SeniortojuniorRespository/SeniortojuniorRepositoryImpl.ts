import SOPOAxios from "src/libs/axios/customAxios";
import { 
  SeniortojuniorResponse, 
  SeniortojuniorTypes,
  SeniortojuniorPostData,
  SeniortojuniorUpdateData
} from "src/types/seniortojunior/seniortojunior.type";
import { SeniortojuniorRepository } from "./SeniortojuniorRepository";
import { pageParms } from "src/types/util/pageParms.type";

class SeniortojuniorRepositoryImpl implements SeniortojuniorRepository {
  public async getSeniortojunior(pageParams: pageParms): Promise<SeniortojuniorResponse> {
    try {
      const { data } = await SOPOAxios.get("/board", { params: pageParams });
      return data;
    } catch (error) {
      console.error("Failed to get seniortojunior list:", error);
      throw error;
    }
  }

  public async getSeniortojuniorById(boardId: number): Promise<SeniortojuniorTypes> {
    try {
      const { data } = await SOPOAxios.get(`/board/${boardId}`);
      return data;
    } catch (error) {
      console.error(`Failed to get seniortojunior by id ${boardId}:`, error);
      throw error;
    }
  }

  public async createSeniortojunior(data: SeniortojuniorPostData): Promise<void> {
    try {
      await SOPOAxios.post("/board", data);
    } catch (error) {
      console.error("Failed to create seniortojunior:", error);
      throw error;
    }
  }

  public async updateSeniortojunior(data: SeniortojuniorUpdateData): Promise<void> {
    try {
      await SOPOAxios.put(`/board/${data.boardId}`, {
        boardTitle: data.boardTitle,
        boardContent: data.boardContent,
      });
    } catch (error) {
      console.error(`Failed to update seniortojunior ${data.boardId}:`, error);
      throw error;
    }
  }

  public async deleteSeniortojunior(boardId: number): Promise<void> {
    try {
      await SOPOAxios.delete(`/board/${boardId}`);
    } catch (error) {
      console.error(`Failed to delete seniortojunior ${boardId}:`, error);
      throw error;
    }
  }
}

export default new SeniortojuniorRepositoryImpl();