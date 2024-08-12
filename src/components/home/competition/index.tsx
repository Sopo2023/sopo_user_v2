import React from "react";
import * as S from "./style";
import { useGetcompetitionList } from "src/queries/competition/competition.query";
import PostItem from "src/components/post/competition";
import PostHeader from "src/components/common/postHeader";
const Competition=()=>{
    const  pageParms={
        page:1,
        size:6
    }
    const {data} = useGetcompetitionList(pageParms);

    return(
        <S.Container>
        <S.competitionVeiw>
            <PostHeader/>
            <S.PostsGrid>
                {
                    data?.data.map((post, index)=>(
                        <PostItem
                            key={index}
                            contestTitle={post.contestTitle}
                            contestContent={post.contestContent}
                           
                            memberName={post.memberName}
                            style={{}}
                        />
                    ))
                }
            </S.PostsGrid>
        </S.competitionVeiw>
        </S.Container>
    )
}
export default Competition