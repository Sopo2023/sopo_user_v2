import styled from "styled-components";

export const ContainerParents = styled.div`
    background: #F7FFF3;
    padding-top: 48px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    height: auto;
    max-height: 90%;
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 353px;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

export const PostsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    justify-items: center;  

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border-top: 1px solid #E0E0E0;

    button {
        padding: 8px 16px;
        cursor: pointer;
        background-color: #f0f0f0;
        border: none;
        border-radius: 4px;
        transition: background-color 0.3s;

        &:hover {
            background-color: #ddd;
        }

        &:disabled {
            cursor: not-allowed;
            background-color: #e0e0e0;
        }
    }
    
    span {
        align-self: center;
        font-size: 14px;
    }
`;