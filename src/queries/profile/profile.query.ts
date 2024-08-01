import { useMutation, useQuery } from "react-query";
import profileRepositoryImpl from "src/repositories/profileRepository/profileRepositoryImpl";
import { profileType } from "src/types/profile/profile.type";
import { AxiosError } from "axios";
import { sopoQueryKey } from "../queryKeys";

export const usePathProfileMutation = () => {
  const mutation = useMutation(profileRepositoryImpl.patchProfile);
  return mutation;
};
export const useGetProfileList = () => {
  const useGetProfile = useQuery<
    profileType,
    AxiosError,
    profileType,
    string[]
  >({
    queryKey: [sopoQueryKey.profile.getProfile],
    queryFn: () => profileRepositoryImpl.getProfileInfo(),
    staleTime: 10 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
  return useGetProfile;
};
