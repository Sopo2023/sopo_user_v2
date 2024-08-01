import React from "react";
import * as S from "src/components/home/profile/profileEdit/style";
interface ProfileEditProps {
    onCancel: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ onCancel }) => {
    return (
        <S.profileWrap>
            <S.mainWrap>
                <h1>프로필 수정</h1>
                <button onClick={onCancel}>취소</button>
            </S.mainWrap>
        </S.profileWrap>
    )
        ;
};

export default ProfileEdit;
