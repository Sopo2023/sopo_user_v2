import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { sopoQueryKey } from "../queryKeys";
import {
  SeniortojuniorResponse,
} from "src/types/seniortojunior/seniortojunior.type";
import SeniortojuniorRepositoryImpl from "src/repositories/SeniortojuniorRespository/SeniortojuniorRepositoryImpl";

export const useGetSeniortojuniorList = () => {
  const useGetSeniortojunior = useQuery<
    SeniortojuniorResponse,
    AxiosError,
    SeniortojuniorResponse,
    string[]
  >({
    queryKey: [sopoQueryKey.seniortojunior.getSeniortojunior],
    queryFn: () => SeniortojuniorRepositoryImpl.getSeniortojunior(),
    staleTime: 5 * 1000,
  });
  return useGetSeniortojunior;
};
// export const usePostSeniortojunior=()=>{
//     cosnt mutate = useMutation({
//         mutationFn:()
//     })
// }
