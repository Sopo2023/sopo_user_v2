import React from "react";
import * as S from "./style";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import Pencil from "src/assets/imgs/profile/write.svg";

const Profile = () => {
    return (
        <S.profileWrap>
            <S.mainWrap>
                <S.TitleWrap>
                    <S.AvatarContainer>
                        <S.Avatar src={AvatarImg} alt="프로필 이미지" />
                        <S.PencilIconContainer>
                            <S.PencilIcon src={Pencil} alt="편집 아이콘" />
                        </S.PencilIconContainer>
                    </S.AvatarContainer>
                    <S.ProfileInfo>
                        <S.UserName>이해준</S.UserName>
                        <S.ButtonContainer>
                            <S.EditButton>프로필 수정</S.EditButton>
                            <S.SettingsButton>프로필 설정</S.SettingsButton>
                        </S.ButtonContainer>
                    </S.ProfileInfo>
                </S.TitleWrap>

            </S.mainWrap>
        </S.profileWrap>
    );
};

export default Profile;
