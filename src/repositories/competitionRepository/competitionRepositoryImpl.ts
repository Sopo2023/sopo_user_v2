import { CompetitionRepository } from "./competitionRepository";
import { profileType } from "src/types/profile/profile.type";
import SOPOAxios from "src/libs/axios/customAxios";
import { competitionResponse } from "@src/types/competition/competition.type";
import { pageParms } from "src/types/util/pageParms.type";

class CompetitionRepositoryimpl implements CompetitionRepository {
    public async getCompetition(pageParms: pageParms): Promise<competitionResponse> {
        try {
            const { data } = await SOPOAxios.get("/contest", { params: pageParms });
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new CompetitionRepositoryimpl();
