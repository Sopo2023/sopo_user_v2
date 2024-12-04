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

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
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
                            reaction={0}
                            author={post.author}
                            style={{}}
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