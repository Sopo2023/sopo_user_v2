import React from 'react';
import * as S from './style';

import AvatarImg from 'src/assets/imgs/header/AvatarImg.svg';

interface PostItemProps {
 
    contestTitle:string;
    contestContent: string;
    memberName:string;

    style:React.CSSProperties;
}

const PostItem = ({ contestTitle, contestContent, memberName,style }: PostItemProps) => {
    return (
        <S.PostContainer style={style}>
            <S.PostImage />
            <S.PostContentWrapper>
                <S.PostTitle>{contestTitle}</S.PostTitle>
                <S.PostContent>{contestContent}</S.PostContent>
                <S.PostFooter>
                    <div>
                        {/* <S.PostDate>{contestDateTime}</S.PostDate> */}
                        {/* <S.PostReaction>{reaction}</S.PostReaction> */}
                    </div>
                    <S.AuthorWrap>
                        <S.AuthorProfile src={AvatarImg}/>
                        <S.PostAuthor>{memberName}</S.PostAuthor>
                    </S.AuthorWrap>
                </S.PostFooter>
            </S.PostContentWrapper>
        </S.PostContainer>
    );
};

export default PostItem;