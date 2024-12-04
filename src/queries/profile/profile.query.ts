import { useMutation, useQuery,UseQueryOptions,UseQueryResult } from "react-query";
import profileRepositoryImpl from "src/repositories/profileRepository/profileRepositoryImpl";
import { profileType } from "src/types/profile/profile.type";
import { AxiosError } from "axios";
import { sopoQueryKey } from "../queryKeys";
import {tokenCheck} from "src/libs/tokenCheck/tokenCheck";
export const usePathProfileMutation = () => {
  const mutation = useMutation(profileRepositoryImpl.patchProfile);
  return mutation;
};
export const useGetProfileList = (
  options?: UseQueryOptions<profileType, AxiosError, profileType, string[]>
): UseQueryResult<profileType, AxiosError> => {
  const { getTokenCheck } = tokenCheck();
  return useQuery({
    queryKey: [sopoQueryKey.profile.getProfile],
    queryFn: () => profileRepositoryImpl.getProfileInfo(),
    staleTime: 1 * 60 * 1000,
    cacheTime: 1 * 60 * 1000,
    enabled : getTokenCheck(),
    ...options, 
  });
};