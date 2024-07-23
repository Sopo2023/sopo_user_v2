import React from 'react';
import * as S from "src/components/common/header/index.style";

import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";

const Header= () => {
  return (
    <S.HeaderContainer>
      <S.AvatarProfile>
      <S.AvatarImg src={AvatarImg} alt="Profile" />
      <S.AvatarName>이해준</S.AvatarName>
      </S.AvatarProfile>
    </S.HeaderContainer>
  );
};

export default Header;

