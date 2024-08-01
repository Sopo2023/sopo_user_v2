import { profileType } from "src/types/profile/profile.type";

export interface ProfileRepository {
  getProfileInfo(): Promise<profileType>;
}

export interface patchProfileParam {
  memberName: string;
  memberEmail: string;
  authCode: string;
  memberPassword: string;
}

// export interface emailRespose{
//   authCode:string;
// }

// export interface NewAccessTokenResponse  {
//   accessToken: string
// };

// export interface SignUpParams extends Sign{};
