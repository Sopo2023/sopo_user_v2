export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
