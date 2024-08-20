import React from 'react'
import * as S from 'src/components/common/page/index.style';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    displayTotalPages: number;
    onNextPage: () => void;
    onPrevPage: () => void;
    onPageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    displayTotalPages,
    onNextPage,
    onPrevPage,
    onPageClick,
}) => {
    return (
        <S.PaginationWrapper>
            <button onClick={onPrevPage} disabled={currentPage === 1}>
                &larr;
            </button>
            {[...Array(displayTotalPages)].map((_, index) => (
                <div
                    key={index}
                    className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => onPageClick(index + 1)}
                >
                    {index + 1}
                </div>
            ))}
            <button onClick={onNextPage} disabled={currentPage === displayTotalPages}>
                &rarr;
            </button>
        </S.PaginationWrapper>
    );
};

export default Pagination;