import React from 'react';
import * as S from 'src/components/post/senior-to-junior/index.style';

import AvatarImg from 'src/assets/imgs/header/AvatarImg.svg';

interface PostItemProps {
    title: string;
    content: string;
    date: string;
    reaction: number;
    author: string;
    style:React.CSSProperties;
}

const PostItem = ({ title, content, date, reaction, author,style }: PostItemProps) => {
    return (
        <S.PostContainer style={style}>
            <S.PostImage />
            <S.PostContentWrapper>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostContent>{content}</S.PostContent>
                <S.PostFooter>
                    <div>
                        <S.PostDate>{date}</S.PostDate>
                        <S.PostReaction>{reaction}</S.PostReaction>
                    </div>
                    <S.AuthorWrap>
                        <S.AuthorProfile src={AvatarImg}/>
                        <S.PostAuthor>{author}</S.PostAuthor>
                    </S.AuthorWrap>
                </S.PostFooter>
            </S.PostContentWrapper>
        </S.PostContainer>
    );
};

export default PostItem;