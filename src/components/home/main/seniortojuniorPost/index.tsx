import React from "react";
import * as S from "./style";
import note from "src/assets/imgs/main/metometi.svg";
import PostItem from "src/components/post/senior-to-junior";
import { useNavigate } from "react-router-dom";
import {SeniortojuniorResponse, SeniortojuniorTypes} from "src/types/seniortojunior/seniortojunior.type";
import {tokenCheck} from "src/libs/tokenCheck/tokenCheck";
interface prpos {
  post:SeniortojuniorResponse | undefined
}
const SeniortojuniorPost = (post:prpos) => {
  
  const navigate = useNavigate();
  const { getTokenCheck } = tokenCheck();
  return (
    <S.post>
      <S.titleContainer>
        <img src={note} alt="error" />
        <span>선배가 후배에게</span>
      </S.titleContainer>
      <S.contentContainer>
        {getTokenCheck() ?  post?.post?.data.slice(0, 5).map((post, idx) => (
          <PostItem
            key={idx}
            title={post.boardTitle}
            content={post.boardContent}
            date={""}
            reaction={post.boardLikeCount}
            author={""}
            style={{ width: "240px" }}
          />
        )): <S.nullcontainer>
          <span onClick={()=>navigate("/sign")}>로그인하러 가기</span></S.nullcontainer>}
      </S.contentContainer>
    </S.post>
  );
};
export default SeniortojuniorPost;
