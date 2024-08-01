import React from "react";
import * as S from "src/components/home/profile/profileEdit/style";
import ReturnImg from "src/assets/imgs/profile/delete.svg";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import Pencil from "src/assets/imgs/profile/write.svg";
import Lock from "src/assets/imgs/profile/Lock.svg";

interface ProfileEditProps {
    onCancel: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ onCancel }) => {
    return (
        <S.ProfileWrap>
            <S.MainWrap>
                <S.TitleWrap>
                    <S.AvatarContainer>
                        <S.Avatar src={AvatarImg} alt="프로필 이미지" />
                        <S.PencilIconContainer>
                            <S.PencilIcon src={Pencil} alt="편집 아이콘" />
                        </S.PencilIconContainer>
                    </S.AvatarContainer>
                    <S.ProfileInfo>
                        <S.UserName>hae_jun7388</S.UserName>
                    </S.ProfileInfo>
                    <S.ReturnIcon src={ReturnImg} alt="돌아가기 이미지" onClick={onCancel} />
                </S.TitleWrap>
                <S.DetailWrap>
                    <S.SectionTitle>기본정보</S.SectionTitle>
                    <S.Detail>
                        <S.DetailLabel>학교</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>대구소프트웨어마이스터고등학교</S.DetailValue>
                            <S.EditButton>수정</S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이름</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>이해준</S.DetailValue>
                            <S.EditButton>수정</S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이메일</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>hae_jun7388@gmail.com</S.DetailValue>
                            <S.EditButton>수정</S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>비밀번호</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>**********</S.DetailValue>
                            <S.EditButton>수정</S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                </S.DetailWrap>
            </S.MainWrap>
        </S.ProfileWrap>
    );
};

export default ProfileEdit;