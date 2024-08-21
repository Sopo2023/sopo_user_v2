import React, { useState } from "react";
import * as S from "src/components/home/profile/profileEdit/style";
import ReturnImg from "src/assets/imgs/profile/delete.svg";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import Pencil from "src/assets/imgs/profile/write.svg";
import { useGetProfileList } from "src/queries/profile/profile.query";
import Modal from "src/components/home/profile/profileEdit/profileCorrection/index";

interface ProfileEditProps {
    onCancel: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ onCancel }) => {
    const { data } = useGetProfileList();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentField, setCurrentField] = useState<string | null>(null);
    const [currentValue, setCurrentValue] = useState<string>("");

    const handleEditClick = (field: string, value: string) => {
        setCurrentField(field);
        setCurrentValue(value);
        setIsModalOpen(true);
    };

    const handleSave = (newValue: string) => {
        console.log(`${currentField} 수정됨: ${newValue}`);
    };

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
                            <S.EditButton onClick={() => handleEditClick("학교", data?.data.memberSchool || "")}>
                                수정
                            </S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이름</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberName}</S.DetailValue>
                            <S.EditButton onClick={() => handleEditClick("이름", data?.data.memberName || "")}>
                                수정
                            </S.EditButton>
                        </S.DetailContainer>
                    </S.Detail>
                    <S.Detail>
                        <S.DetailLabel>이메일</S.DetailLabel>
                        <S.DetailContainer>
                            <S.DetailValue>{data?.data.memberEmail}</S.DetailValue>
                            <S.EditButton onClick={() => handleEditClick("이메일", data?.data.memberEmail || "")}>
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
