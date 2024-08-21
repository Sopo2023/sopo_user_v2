import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/common/header/index.style";
import { useGetProfileList } from "src/queries/profile/profile.query";
import AvatarImg from "src/assets/imgs/header/AvatarImg.svg";
import {tokenCheck} from "src/libs/tokenCheck/tokenCheck";
import SignNavigate from "../signNavigate";

const Header = () => {
  const navigate = useNavigate();
  const { getTokenCheck } = tokenCheck();
  const { data } = useGetProfileList({suspense:true});
 
    

  return (
    <S.HeaderContainer>
      {getTokenCheck()?  <S.AvatarProfile onClick={()=> navigate("/profile")}>
        <S.AvatarImg src={AvatarImg} alt="error" />
        <S.AvatarName>{data?.data.memberName}</S.AvatarName>
      </S.AvatarProfile>:<S.AvatarProfile> <SignNavigate/></S.AvatarProfile>}
     
    </S.HeaderContainer>
  );
};

export default Header;
