import { ProfileRepository,patchProfileParam } from "./profileRepository"
import { profileType } from "src/types/profile/profile.type"
import SOPOAxios from "src/libs/axios/customAxios";

class ProfileRepositoryimpl implements ProfileRepository{
    public async getProfileInfo(): Promise<profileType> {
        const { data } = await SOPOAxios.get("/member");
        return data;
    }
    public async patchProfile(pramsData:patchProfileParam):Promise<void>{
        await SOPOAxios.patch("/profile",pramsData)
    }
}
export default new ProfileRepositoryimpl