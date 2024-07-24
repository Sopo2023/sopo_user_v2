import styled from "styled-components";

export const Container = styled.div`
    width: 899px;
    height: 710px;
    flex-shrink: 0;

    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);

    display: flex;
`;

export const EditorContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px; 
    box-sizing: border-box;
`;

export const TitleInput = styled.input`
    color: var(--Neutral-60, #858585);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; 
    margin-bottom: 10px; 
`;

export const ButtonContainer = styled.div`
    margin: 10px 0; 
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;

export const MarkdownButton = styled.button`
    color: var(--DarkGray-70, #8E8E8E);
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 200% */
    border: none;
    background: none;
    padding: 5px 10px;
    cursor: pointer;
    flex: 1 1 auto; 
    
    &:hover {
        background: var(--DarkGray-95, #EEE);
        color: black;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: calc(100% - 60px); 
    box-sizing: border-box; 
    resize: none;
    overflow-y: auto;
    color: var(--Neutral-60, #858585);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

export const Preview = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    border-left: 1px solid #ccc;
    box-sizing: border-box; 
    overflow-y: auto;

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }
`;