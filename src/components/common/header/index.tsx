import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "src/components/common/header/index.style";

import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('username'); 

  const handleHeaderClick = () => {
    navigate('/profile');
  };

  return (
    <S.HeaderContainer >
      <S.AvatarProfile onClick={handleHeaderClick}>
        <S.AvatarImg src={AvatarImg} alt="error" />
        <S.AvatarName>{username}</S.AvatarName>
      </S.AvatarProfile>
    </S.HeaderContainer>
  );
};

export default Header;