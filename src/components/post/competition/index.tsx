import React from 'react';
import * as S from './style';

import AvatarImg from 'src/assets/imgs/header/AvatarImg.svg';
import { useGetcompetitionList } from 'src/queries/competition/competition.query';

interface PostItemProps {
 
    contestTitle:string;
    contestContent: string;
    memberName:string;

    style:React.CSSProperties;
}

const PostItem = () => {
    const pageParams = {
        page: 1,
        size: 6,
      };
    const { data: competitionData } = useGetcompetitionList(pageParams);
    
    return (
        <>
        {competitionData?.data.map((post, index) => (
        <S.PostContainer >
            <S.PostImage />
            <S.PostContentWrapper>
                <S.PostTitle>{post.contestTitle}</S.PostTitle>
                <S.PostContent>{post.contestContent}</S.PostContent>
                <S.PostFooter>
                    <div>
                        {/* <S.PostDate>{contestDateTime}</S.PostDate> */}
                        {/* <S.PostReaction>{reaction}</S.PostReaction> */}
                    </div>
                    <S.AuthorWrap>
                        <S.AuthorProfile src={AvatarImg}/>
                        <S.PostAuthor>{post.memberName}</S.PostAuthor>
                    </S.AuthorWrap>
                </S.PostFooter>
            </S.PostContentWrapper>
        </S.PostContainer>
        ))}
        </>
    );
};

export default PostItem;