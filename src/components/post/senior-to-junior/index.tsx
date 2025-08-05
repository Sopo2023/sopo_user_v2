import React from 'react';
import * as S from './style';
import AvatarImg from 'src/assets/imgs/header/AvatarImg.svg';
import { formatDate } from 'src/utils/date/dateUtils';
import { truncateText, formatNumber } from 'src/utils/text/textUtils';

interface PostItemProps {
  title: string;
  content: string;
  date: string;
  reaction: number;
  author: string;
  style?: React.CSSProperties;
}

const PostItem = ({ 
  title, 
  content, 
  date, 
  reaction, 
  author, 
  style 
}: PostItemProps) => {
  return (
    <S.PostContainer style={style}>
      <S.PostImage />
      <S.PostContentWrapper>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostContent>{truncateText(content)}</S.PostContent>
        <S.PostFooter>
          <div>
            <S.PostDate>{formatDate(date)}</S.PostDate>
            <S.PostReaction>❤️ {formatNumber(reaction)}</S.PostReaction>
          </div>
          <S.AuthorWrap>
            <S.AuthorProfile src={AvatarImg} alt="작성자 프로필" />
            <S.PostAuthor>{author || "익명"}</S.PostAuthor>
          </S.AuthorWrap>
        </S.PostFooter>
      </S.PostContentWrapper>
    </S.PostContainer>
  );
};

export default PostItem;