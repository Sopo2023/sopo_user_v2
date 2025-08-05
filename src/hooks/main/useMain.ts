import { useGetSeniortojuniorList } from "src/queries/seniortojunior/seniortojunior.query";
import { pageParms } from "src/types/util/pageParms.type";

export const useMain = () => {
  const pageParams: pageParms = {
    page: 1,
    size: 4,
  };

  const { data, isLoading, error } = useGetSeniortojuniorList(pageParams);

  return {
    data,
    isLoading,
    error,
  };
};

