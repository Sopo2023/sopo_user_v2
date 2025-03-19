import React, { useState, Suspense } from "react";
import * as S from "./style";
import { useGetcompetitionList } from "src/queries/competition/competition.query";
import PostItem from "src/components/post/competition";
import PostHeader from "src/components/common/postHeader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "src/components/common/ErrorBoundary";
import PostSkeleton from "src/components/common/skeleton/postSkeleton";

const Competition = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const pageSize = 6; 
  const totalPages = 5;

  const pageParams = {
    page: currentPage,
    size: pageSize,
  };



  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <S.Container>
      <S.competitionVeiw>
        <PostHeader />
        <S.PostsGrid>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<PostSkeleton />}>
                <PostItem/>
            </Suspense>
          </ErrorBoundary>
        </S.PostsGrid>

        {/* 페이지네이션 */}
        {/* <S.Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <S.PageButton
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1} // 현재 페이지 강조
            >
              {index + 1}
            </S.PageButton>
          ))}
        </S.Pagination> */}
      </S.competitionVeiw>
    </S.Container>
  );
};

export default Competition;
