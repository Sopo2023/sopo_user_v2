import React, { useState } from "react";
import * as S from "./style";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import Pencil from "src/assets/imgs/profile/write.svg";
import Empty from "src/assets/imgs/profile/Empty.svg";
import { useGetProfileList } from "src/queries/profile/profile.query";
import { renderEmptyMessage } from "src/utils/profile/renderEmptyMessage";

interface ProfileProps {
    onEdit: () => void;
    onSetting: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onEdit, onSetting }) => {
    const [selected, setSelected] = useState(0);
    const { data } = useGetProfileList();

    const handleSelect = (index: number) => {
        setSelected(index);
    };

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
                        <S.UserName>{data?.data.memberName}</S.UserName>
                        <S.ButtonContainer>
                            <S.EditButton onClick={onEdit}>프로필 수정</S.EditButton>
                            <S.SettingsButton onClick={onSetting}>프로필 설정</S.SettingsButton>
                        </S.ButtonContainer>
                    </S.ProfileInfo>
                </S.TitleWrap>
                <S.SelectWrap>
                    {["선배가 후배에게", "포트폴리오", "대회", "북마크"].map((text, index) => (
                        <S.Span
                            key={index}
                            isSelected={selected === index}
                            onClick={() => handleSelect(index)}
                        >
                            {text}
                        </S.Span>
                    ))}
                </S.SelectWrap>
                <S.emptyWrap>
                    <img src={Empty} alt="빈 이미지"/>
                    <span>{renderEmptyMessage(selected)}</span>
                </S.emptyWrap>
            </S.mainWrap>
        </S.profileWrap>
    );
};

export default Profile;
