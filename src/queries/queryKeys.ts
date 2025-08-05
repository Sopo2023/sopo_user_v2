// 쿼리 키 타입 정의
export type QueryKeyType = 'seniortojunior' | 'profile' | 'competition' | 'portfolio';

// 쿼리 키 상수
export const QUERY_KEYS = {
  SENIORTOJUNIOR: {
    LIST: 'seniortojunior-list',
    DETAIL: 'seniortojunior-detail',
    CREATE: 'seniortojunior-create',
    UPDATE: 'seniortojunior-update',
    DELETE: 'seniortojunior-delete',
  },
  PROFILE: {
    GET: 'profile-get',
    UPDATE: 'profile-update',
  },
  COMPETITION: {
    LIST: 'competition-list',
    DETAIL: 'competition-detail',
    CREATE: 'competition-create',
    UPDATE: 'competition-update',
    DELETE: 'competition-delete',
  },
  PORTFOLIO: {
    LIST: 'portfolio-list',
    DETAIL: 'portfolio-detail',
    CREATE: 'portfolio-create',
    UPDATE: 'portfolio-update',
    DELETE: 'portfolio-delete',
  },
} as const;

// 기존 호환성을 위한 sopoQueryKey
export const sopoQueryKey = {
  seniortojunior: {
    getSeniortojunior: QUERY_KEYS.SENIORTOJUNIOR.LIST,
  },
  profile: {
    getProfile: QUERY_KEYS.PROFILE.GET,
  },
  competition: {
    getCompetition: QUERY_KEYS.COMPETITION.LIST,
  },
  portfolio: {
    getPortfolio: QUERY_KEYS.PORTFOLIO.LIST,
  },
} as const;

// 쿼리 키 생성 헬퍼 함수
export const createQueryKey = (key: string, params?: Record<string, unknown>) => {
  if (!params) return [key];
  return [key, params];
};

// 특정 쿼리 키 생성 함수들
export const createSeniortojuniorListKey = (pageParams: { page: number; size: number }) => 
  createQueryKey(QUERY_KEYS.SENIORTOJUNIOR.LIST, pageParams);

export const createSeniortojuniorDetailKey = (id: number) => 
  createQueryKey(QUERY_KEYS.SENIORTOJUNIOR.DETAIL, { id });

export const createProfileKey = () => 
  createQueryKey(QUERY_KEYS.PROFILE.GET);

export const createCompetitionListKey = (pageParams: { page: number; size: number }) => 
  createQueryKey(QUERY_KEYS.COMPETITION.LIST, pageParams);