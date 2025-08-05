// 페이지네이션 기본값
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_SIZE: 10,
  MAX_SIZE: 50,
} as const;

// API 관련 상수
export const API = {
  TIMEOUT: 10000,
  RETRY_COUNT: 3,
  CACHE_TIME: 5 * 60 * 1000, // 5분
  STALE_TIME: 1 * 60 * 1000, // 1분
} as const;

// 텍스트 관련 상수
export const TEXT = {
  MAX_TITLE_LENGTH: 100,
  MAX_CONTENT_LENGTH: 1000,
  MAX_DESCRIPTION_LENGTH: 200,
} as const;

// 날짜 포맷 관련 상수
export const DATE_FORMAT = {
  DISPLAY: 'ko-KR',
  FULL_DATE: 'YYYY년 MM월 DD일',
  SHORT_DATE: 'MM/DD',
  TIME: 'HH:mm',
} as const;

// 에러 메시지
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '네트워크 연결을 확인해주세요.',
  SERVER_ERROR: '서버 오류가 발생했습니다.',
  UNAUTHORIZED: '로그인이 필요합니다.',
  FORBIDDEN: '접근 권한이 없습니다.',
  NOT_FOUND: '요청한 리소스를 찾을 수 없습니다.',
  VALIDATION_ERROR: '입력 정보를 확인해주세요.',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
} as const;

// 성공 메시지
export const SUCCESS_MESSAGES = {
  CREATE: '성공적으로 생성되었습니다.',
  UPDATE: '성공적으로 수정되었습니다.',
  DELETE: '성공적으로 삭제되었습니다.',
  LOGIN: '로그인되었습니다.',
  LOGOUT: '로그아웃되었습니다.',
} as const; 