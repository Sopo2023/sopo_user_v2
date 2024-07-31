import React from "react";
import * as S from "./style";
import note from "src/assets/imgs/main/metometi.svg";
import PostItem from "src/components/post/senior-to-junior";
import posts from "src/constants/postDummyData/index";

const SeniortojuniorPost = () => {
  return (
    <S.post>
      <S.titleContainer>
        <img src={note} alt="error" />
        <span>선배가 후배에게</span>
      </S.titleContainer>
      <S.contentContainer>
        {posts.slice(0, 5).map((post, idx) => (
          <PostItem
            key={idx}
            title={post.title}
            content={post.content}
            date={post.date}
            reaction={post.reaction}
            author={post.author}
            style={{ width: "240px" }}
          />
        ))}
      </S.contentContainer>
    </S.post>
  );
};
export default SeniortojuniorPost;
