import { competitionType, competitionResponse } from "src/types/competition/competition.type";
import { pageParms } from "src/types/util/pageParms.type";
export interface CompetitionRepository{
    getCompetition(pageParms:pageParms): Promise<competitionResponse>
}