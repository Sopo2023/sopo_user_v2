import React from "react";
import * as S from "src/components/home/profile/profileEdit/style";
import ReturnImg from "src/assets/imgs/profile/delete.svg";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import Pencil from "src/assets/imgs/profile/write.svg";
import Modal from "src/components/home/profile/profileEdit/profileCorrection/index";
import useProfileEdit from "src/hooks/profile/useProfileEdit";

interface ProfileEditProps {
    onCancel: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ onCancel }) => {
    const {
        data,
        isModalOpen,
        currentField,
        currentValue,
        handleEditClick,
        handleSave,
        setIsModalOpen,
    } = useProfileEdit();

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
                            <S.EditButton onClick={() => handleEditClick("학교", data?.data.memberSchool || "학교 정보가 존재하지 않습니다.")}>
                                수정
                            </S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이름</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberName}</S.DetailValue>
                            <S.EditButton onClick={() => handleEditClick("이름", data?.data.memberName || "이름이 올바르지 않습니다.")}>
                                수정
                            </S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이메일</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberEmail}</S.DetailValue>
                            <S.EditButton onClick={() => handleEditClick("이메일", data?.data.memberEmail || "이메일이 존재하지 않습니다.")}>
                                수정
                            </S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>비밀번호</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>**********</S.DetailValue>
                            <S.EditButton onClick={() => handleEditClick("비밀번호", "**********")}>
                                수정
                            </S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                </S.DetailWrap>
            </S.MainWrap>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`${currentField}`}
                value={currentValue}
                onSave={handleSave}
            />
        </S.ProfileWrap>
    );
};

export default ProfileEdit;
