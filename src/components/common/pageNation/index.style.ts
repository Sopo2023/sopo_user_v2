import styled from "styled-components";

export const PaginationContainer = styled.div`
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