import React from "react";
import * as S from "./style";
import note from "src/assets/imgs/main/metometi.svg";

const SeniortojuniorPost = () => {
  return (
    <S.post>
      <S.titleContainer>
        <img src={note} alt="error" />
        <span>선배가 후배에게</span>
      </S.titleContainer>
      <S.contentContainer></S.contentContainer>
    </S.post>
  );
};
export default SeniortojuniorPost;
