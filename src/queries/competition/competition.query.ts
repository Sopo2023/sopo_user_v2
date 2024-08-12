import { competitionType,competitionResponse } from "src/types/competition/competition.type"
import CompetitionRepositoryimpl from "src/repositories/competitionRepository/competitionRepositoryImpl"
import { AxiosError } from "axios"
import { useQuery } from "react-query"
import { sopoQueryKey } from "../queryKeys"
import { pageParms } from "src/types/util/pageParms.type"

export const useGetcompetitionList = (pageParms:pageParms)=>{
    const useGetcompetition = useQuery<competitionResponse, AxiosError, competitionResponse, string[]>({
        queryKey:[sopoQueryKey.competition.getCompetition],
        queryFn: ()=> CompetitionRepositoryimpl.getCompetition(pageParms),
        staleTime: 1 * 60 *1000,
        cacheTime: 1* 60 * 1000,
    })
    return useGetcompetition
}