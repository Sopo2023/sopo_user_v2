import React, { useState } from "react";
import * as S from 'src/components/home/seniortojunior/index.style';
import PostHeader from 'src/components/common/postHeader/index';
import PostItem from 'src/components/post/senior-to-junior/index';

const posts = [
    {
        title: "Dev.POST: AI가 써주는 기술 블로그 설치 어떻게 해요?",
        content: "안녕하세요, AI가 자동으로 작성하는 블로그 설치에 대해 알아봅시다.",
        date: "2024.08.01",
        reaction: "3개의 좋아요 · 4개의 좋아요",
        author: "이해준"
    },
    {
        title: "독종 개발자로 대소고에서 살아남는 법",
        content: "독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. 독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. 독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. ",
        date: "2024.07.25",
        reaction: "3개의 좋아요 · 4개의 좋아요",
        author: "신민호"
    },
    {
        title: "Dev.POST: AI가 써주는 기술 블로그 설치 어떻게 해요?",
        content: "안녕하세요, AI가 자동으로 작성하는 블로그 설치에 대해 알아봅시다.",
        date: "2024.08.01",
        reaction: "3개의 좋아요 · 4개의 좋아요",
        author: "이해준"
    },
    {
        title: "독종 개발자로 대소고에서 살아남는 법",
        content: "독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. 독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. 독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. ",
        date: "2024.07.25",
        reaction: "3개의 좋아요 · 4개의 좋아요",
        author: "신민호"
    },
    {
        title: "Dev.POST: AI가 써주는 기술 블로그 설치 어떻게 해요?",
        content: "안녕하세요, AI가 자동으로 작성하는 블로그 설치에 대해 알아봅시다.",
        date: "2024.08.01",
        reaction: "3개의 좋아요 · 4개의 좋아요",
        author: "이해준"
    },
    {
        title: "독종 개발자로 대소고에서 살아남는 법",
        content: "독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. 독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. 독종 개발자로 대소고에서 살아남기 위해서는 어떻게 해야할까요. ",
        date: "2024.07.25",
        reaction: "3개의 좋아요 · 4개의 좋아요",
        author: "신민호"
    }
];

const ITEMS_PER_PAGE = 6;

const Seniortojunior = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
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
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </S.Pagination>
            </S.Container>
        </S.ContainerParents>
    );
};

export default Seniortojunior;