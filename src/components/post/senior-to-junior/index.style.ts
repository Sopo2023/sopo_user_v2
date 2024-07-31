import styled from "styled-components";
import ImageSrc from 'src/assets/imgs/postHeader/post.png';

export const PostImage = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${ImageSrc});
    background-size: cover;
    background-position: center;
    border-radius: 8px 8px 0 0;
`;

export const PostContainer = styled.div`
    width: 300px;
    height: 244px;
    max-height: 244px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover{
        transform: translateY(-10px);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

export const PostContentWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const PostTitle = styled.h2`
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const PostContent = styled.p`
    font-size: 13px;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: calc(13px * 2); 
`;

export const PostFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 12px;
    color: #888;

    & > div:first-child {
        width: 100%;
        margin-bottom: 4px;
    }

    & > div:last-child {
        width: 100%;
    }
`;

export const PostDate = styled.span`
    color: var(--Gary-800, #818181);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px;
`;

export const PostReaction = styled.span`
    color: var(--Gary-800, #818181);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px;
    margin-left: 8px; 
`;

export const AuthorProfile = styled.img`
    width: 14px;
    height: 14px;
`

export const PostAuthor = styled.span`
    color: var(--DarkGray-900, #0E0E0E);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    margin-left: 4px;
`;

export const AuthorWrap = styled.div`
    display: flex;
    align-items: center;
`