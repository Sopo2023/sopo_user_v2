import React, { Suspense } from "react";
import * as S from "./style";
import { useGetcompetitionList } from "src/queries/competition/competition.query";
import PostItem from "src/components/post/competition";
import PostHeader from "src/components/common/postHeader";
import ErrorBoundary from "src/components/common/ErrorBoundary";
import SkeletonComponent from "src/components/common/skeleton";
const Competition=()=>{
    const  pageParms={
        page:1,
        size:6
    }
    const {data} = useGetcompetitionList(pageParms );

    return(
        <S.Container>
        <S.competitionVeiw>
            <PostHeader/>
            <S.PostsGrid>
                <ErrorBoundary fallback={<><h2>데이터를 불러오지 못했습니다.</h2></>}>
                <Suspense fallback={<SkeletonComponent height={100}/>}>

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
                </Suspense>
                </ErrorBoundary>
            </S.PostsGrid>
        </S.competitionVeiw>
        </S.Container>
    )
}
export default Competition