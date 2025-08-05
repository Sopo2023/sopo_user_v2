import React, { useState } from "react";
import * as S from './style';
import PostHeader from 'src/components/common/postHeader/index';
import PostItem from 'src/components/post/senior-to-junior/index';
import Pagination from 'src/components/common/pageNation/index';
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
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={displayTotalPages} 
                    onPageChange={handlePageChange} 
                />
            </S.Container>
        </S.ContainerParents>
    );
};

export default Seniortojunior;