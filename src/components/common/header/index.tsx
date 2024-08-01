import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/common/header/index.style";
import { useGetProfileList } from "src/queries/profile/profile.query";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";

const Header = () => {
  const navigate = useNavigate();
  const { data } = useGetProfileList();


  const handleHeaderClick = () => {
    navigate("/profile");
  };

  return (
    <S.HeaderContainer>
      <S.AvatarProfile onClick={handleHeaderClick}>
        <S.AvatarImg src={AvatarImg} alt="error" />
        <S.AvatarName>{data?.data.memberName}</S.AvatarName>
      </S.AvatarProfile>
    </S.HeaderContainer>
  );
};

export default Header;
