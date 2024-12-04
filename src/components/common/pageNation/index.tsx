import React from "react";
import styled from "styled-components";

import * as S from './index.style'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        } else {
            alert(
                "소포 검색은 최상의 검색결과를 제공하기 위해, 검색결과를 5페이지까지만 제공하고 있습니다.\n" +
                "5페이지 내에서 원하는 검색결과를 찾지 못한 경우, 더욱 구체적인 검색어를 입력해 검색해주세요."
            );
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <S.PaginationContainer>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>이전</button>
            <span>{currentPage} 페이지 / {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>다음</button>
        </S.PaginationContainer>
    );
};

export default Pagination;