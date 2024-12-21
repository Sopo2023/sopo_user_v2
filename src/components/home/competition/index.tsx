import React, { Suspense } from "react";
import * as S from "./style";
import { useGetcompetitionList } from "src/queries/competition/competition.query";
import PostItem from "src/components/post/competition";
import PostHeader from "src/components/common/postHeader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "src/components/common/ErrorBoundary";
import PostSkeleton from "src/components/common/skeleton/postSkeleton";
const Competition=()=>{
    const  pageParms={
        page:1,
        size:6
    }
    
      const {data:competitionData} = useGetcompetitionList(pageParms );


    return(
        <S.Container>
        <S.competitionVeiw>
            <PostHeader/>
            <S.PostsGrid>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<PostSkeleton/>}>

                {
                    competitionData?.data.map((post, index)=>(
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