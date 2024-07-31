import React, { useState, useEffect } from "react";
import * as S from 'src/components/home/seniortojunior/index.style';
import PostHeader from 'src/components/common/postHeader/index';
import PostItem from 'src/components/post/senior-to-junior/index';
import posts from 'src/constants/postDummyData/index'; 

const ITEMS_PER_PAGE = 6;
const MAX_PAGES = 5; 

const Seniortojunior = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
    const displayTotalPages = Math.min(totalPages, MAX_PAGES);

    const handleNextPage = () => {
        if (currentPage < displayTotalPages) {
            setCurrentPage(currentPage + 1);
        } else {
            alert(
                "소포 검색은 최상의 검색결과를 제공하기 위해, 검색결과를 5페이지까지만 제공하고 있습니다.\n" +
                "5페이지 내에서 원하는 검색결과를 찾지 못한 경우, 더욱 구체적인 검색어를 입력해 검색해주세요."
            );
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <S.ContainerParents>
            <S.Container>
                <PostHeader />
                <S.PostsGrid>
                    {currentPosts.map((post, index) => (
                        <PostItem
                            key={index}
                            title={post.title}
                            content={post.content}
                            date={post.date}
                            reaction={post.reaction}
                            author={post.author}
                        />
                    ))}
                </S.PostsGrid>
                <S.Pagination>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {displayTotalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === displayTotalPages}>Next</button>
                </S.Pagination>
            </S.Container>
        </S.ContainerParents>
    );
};

export default Seniortojunior;