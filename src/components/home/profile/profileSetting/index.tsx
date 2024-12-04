import React from "react";
import * as S from "src/components/home/profile/profileSetting/style";
import ReturnImg from "src/assets/imgs/profile/delete.svg";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import Pencil from "src/assets/imgs/profile/write.svg";
import { useGetProfileList } from "src/queries/profile/profile.query";

interface ProfileEditProps {
    onCancel: () => void;
}

const ProfileSetting: React.FC<ProfileEditProps> = ({ onCancel }) => {
    const { data } = useGetProfileList();
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
                        <S.UserName>{data?.data.memberId}</S.UserName>
                    </S.ProfileInfo>
                    <S.ReturnIcon src={ReturnImg} alt="돌아가기 이미지" onClick={onCancel} />
                </S.TitleWrap>
                <S.DetailWrap>
                    <S.SectionTitle>기본정보</S.SectionTitle>
                    <S.Detail>
                        <S.DetailLabel>학교</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberSchool}</S.DetailValue>
                            <S.EditButton>수정</S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이름</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberName}</S.DetailValue>
                            <S.EditButton>수정</S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이메일</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberEmail}</S.DetailValue>
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
                <div className="alarmSetting">
                    <span>정보수신동의</span>
                    <div className="alarmDetail">
                        <span>SOPO가 보내는 이메일을 받겠습니다.</span>
                    </div>
                    <div className="alarmDetail">
                        <span>SOPO가 보내는 푸시알림을 앱으로 받겠습니다.</span>
                    </div>
                </div>
            </S.MainWrap>
        </S.ProfileWrap>
    );
};

export default ProfileSetting;