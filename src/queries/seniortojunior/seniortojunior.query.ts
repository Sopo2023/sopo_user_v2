import { useQuery, useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { 
  createSeniortojuniorListKey, 
  createSeniortojuniorDetailKey,
  QUERY_KEYS 
} from "../queryKeys";
import {
  SeniortojuniorResponse,
  SeniortojuniorPostData,
  SeniortojuniorUpdateData,
} from "src/types/seniortojunior/seniortojunior.type";
import SeniortojuniorRepositoryImpl from "src/repositories/SeniortojuniorRespository/SeniortojuniorRepositoryImpl";
import { pageParms } from "src/types/util/pageParms.type";
import { showToast } from "src/libs/toast/swal";
import { API } from "src/constants/common/constants";
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from "src/constants/common/constants";

export const useGetSeniortojuniorList = (pageParams: pageParms) => {
  return useQuery({
    queryKey: createSeniortojuniorListKey(pageParams),
    queryFn: () => SeniortojuniorRepositoryImpl.getSeniortojunior(pageParams),
    staleTime: API.STALE_TIME,
    cacheTime: API.CACHE_TIME,
  });
};

export const useGetSeniortojuniorById = (boardId: number) => {
  return useQuery({
    queryKey: createSeniortojuniorDetailKey(boardId),
    queryFn: () => SeniortojuniorRepositoryImpl.getSeniortojuniorById(boardId),
    enabled: !!boardId,
    staleTime: API.STALE_TIME,
    cacheTime: API.CACHE_TIME,
  });
};

export const useCreateSeniortojunior = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: SeniortojuniorPostData) => 
      SeniortojuniorRepositoryImpl.createSeniortojunior(data),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SENIORTOJUNIOR.LIST]);
      showToast("success", SUCCESS_MESSAGES.CREATE);
    },
    onError: (error) => {
      showToast("error", ERROR_MESSAGES.UNKNOWN_ERROR);
      console.error("Create seniortojunior error:", error);
    },
  });
};

export const useUpdateSeniortojunior = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: SeniortojuniorUpdateData) => 
      SeniortojuniorRepositoryImpl.updateSeniortojunior(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries([QUERY_KEYS.SENIORTOJUNIOR.LIST]);
      queryClient.invalidateQueries(createSeniortojuniorDetailKey(variables.boardId));
      showToast("success", SUCCESS_MESSAGES.UPDATE);
    },
    onError: (error) => {
      showToast("error", ERROR_MESSAGES.UNKNOWN_ERROR);
      console.error("Update seniortojunior error:", error);
    },
  });
};

export const useDeleteSeniortojunior = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (boardId: number) => 
      SeniortojuniorRepositoryImpl.deleteSeniortojunior(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SENIORTOJUNIOR.LIST]);
      showToast("success", SUCCESS_MESSAGES.DELETE);
    },
    onError: (error) => {
      showToast("error", ERROR_MESSAGES.UNKNOWN_ERROR);
      console.error("Delete seniortojunior error:", error);
    },
  });
};
