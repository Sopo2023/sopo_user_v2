import React from "react";
import * as S from "./style";
import Alarm from "./alarm/index";
import SeniortojuniorPost from "./seniortojuniorPost";
import { UseMain } from "src/hooks/main/useMain";

const Main = () => {
const {...Main}= UseMain();
  return (
    <S.mainView>
      <S.mainArticle>
        <Alarm />
        <S.cardMain></S.cardMain>
      </S.mainArticle>
      <S.mainArticle>
        <SeniortojuniorPost post={Main.data} />
      </S.mainArticle>
    </S.mainView>
  );
};

export default Main;
