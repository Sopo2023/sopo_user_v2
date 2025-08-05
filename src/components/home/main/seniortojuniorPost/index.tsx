import React from "react";
import * as S from "./style";
import note from "src/assets/imgs/main/metometi.svg";
import PostItem from "src/components/post/senior-to-junior";
import { SeniortojuniorResponse } from "src/types/seniortojunior/seniortojunior.type";
import { tokenCheck } from "src/libs/tokenCheck/tokenCheck";
import SignNavigate from "src/components/common/signNavigate";

interface SeniortojuniorPostProps {
  post: SeniortojuniorResponse | undefined;
}

const SeniortojuniorPost = ({ post }: SeniortojuniorPostProps) => {
  const { getTokenCheck } = tokenCheck();

  if (!getTokenCheck()) {
    return <SignNavigate />;
  }

  if (!post?.data || post.data.length === 0) {
    return (
      <S.post>
        <S.titleContainer>
          <img src={note} alt="선배가 후배에게 아이콘" />
          <span>선배가 후배에게</span>
        </S.titleContainer>
        <S.contentContainer>
          <div>아직 게시글이 없습니다.</div>
        </S.contentContainer>
      </S.post>
    );
  }

  return (
    <S.post>
      <S.titleContainer>
        <img src={note} alt="선배가 후배에게 아이콘" />
        <span>선배가 후배에게</span>
      </S.titleContainer>
      <S.contentContainer>
        {post.data.slice(0, 5).map((postItem, index) => (
          <PostItem
            key={postItem.boardId || index}
            title={postItem.boardTitle}
            content={postItem.boardContent}
            date={postItem.boardCreatedAt || ""}
            reaction={postItem.boardLikeCount}
            author={postItem.authorName || ""}
            style={{ width: "240px" }}
          />
        ))}
      </S.contentContainer>
    </S.post>
  );
};

export default SeniortojuniorPost;
