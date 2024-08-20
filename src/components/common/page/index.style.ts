import styled from "styled-components";

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
        width: 20px;
        height: 20px;
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