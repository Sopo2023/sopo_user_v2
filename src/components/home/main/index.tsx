import React from "react";
import * as S from "./style";
import Alarm from "./alarm/index";
import SeniortojuniorPost from "./seniortojuniorPost";
import { useMain } from "src/hooks/main/useMain";

const Main = () => {
  const { data, isLoading, error } = useMain();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }

  return (
    <S.mainView>
      <S.mainArticle>
        <Alarm />
        <S.cardMain></S.cardMain>
      </S.mainArticle>
      <S.mainArticle>
        <SeniortojuniorPost post={data} />
      </S.mainArticle>
    </S.mainView>
  );
};

export default Main;
