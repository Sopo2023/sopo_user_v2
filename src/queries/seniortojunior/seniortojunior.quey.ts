import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { sopoQueryKey } from "../queryKeys";
import {
  SeniortojuniorResponse,
} from "src/types/seniortojunior/seniortojunior.type";
import SeniortojuniorRepositoryImpl from "src/repositories/SeniortojuniorRespository/SeniortojuniorRepositoryImpl";
import { pageParms } from "src/repositories/SeniortojuniorRespository/SeniortojuniorRepository";

export const useGetSeniortojuniorList = (pageParms:pageParms) => {
  const useGetSeniortojunior = useQuery<
    SeniortojuniorResponse,
    AxiosError,
    SeniortojuniorResponse,
    string[]
  >({
    queryKey: [sopoQueryKey.seniortojunior.getSeniortojunior],
    queryFn: () => SeniortojuniorRepositoryImpl.getSeniortojunior(pageParms),
    staleTime: 1 * 60 * 1000,
    cacheTime: 1 * 60 * 1000,
  });
  return useGetSeniortojunior;
};
// export const usePostSeniortojunior=()=>{
//     cosnt mutate = useMutation({
//         mutationFn:()
//     })
// }
