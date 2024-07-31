import styled from "styled-components";

export const ContainerParents = styled.div`
    background: #F7FFF3;
    padding-top: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1700px;
    min-width: 1100px;
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

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    list-style-type: none;

    button {
        padding: 10px;
        margin: 0 5px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: #777;

        &:disabled {
            color: #e0e0e0;
            cursor: not-allowed;
        }
    }

    .page-number {
        padding: 10px;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-family: 'Inter', sans-serif;
        font-size: 16px; 
        font-style: normal; 
        font-weight: 700; 
        line-height: normal; 
        /* background-color: #555;  */
        color: #000;

        &.active {
            background-color: #0D6B23; 
            color: white;
        }
    }
`;
