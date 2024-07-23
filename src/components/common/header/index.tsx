import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "src/components/common/header/index.style";

import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/profile');
  };

  return (
    <S.HeaderContainer onClick={handleHeaderClick}>
      <S.AvatarProfile>
        <S.AvatarImg src={AvatarImg} alt="error" />
        <S.AvatarName>이해준</S.AvatarName>
      </S.AvatarProfile>
    </S.HeaderContainer>
  );
};

export default Header;