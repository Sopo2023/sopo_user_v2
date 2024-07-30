import React from "react";
import * as S from "./style";
import Alarm from "./alarm/index";
import SeniortojuniorPost from "./seniortojuniorPost";

const Main = () => {
  return (
    <S.mainView>
      <S.mainArticle>
        <Alarm />
        <S.cardMain></S.cardMain>
      </S.mainArticle>
      <S.mainArticle>
        <SeniortojuniorPost />
      </S.mainArticle>
    </S.mainView>
  );
};

export default Main;
