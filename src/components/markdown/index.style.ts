import styled from "styled-components";

export const ContainerParents = styled.div`
    background: #F7FFF3;
    padding-top: 48px;
    height: calc(100vh - 48px);
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const Container = styled.div`
    width: 1100px;
    height: 710px;
    flex-shrink: 0;

    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);

    display: flex;
    
    justify-content: center;
    align-items: center;
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
    color: var(--Neutral-5, #0A0A0A);
    /* Title1/Bold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
    margin-bottom: 10px; 
    border: none;
    outline: none;
`;

export const SepLine = styled.div`
    width: 71px;
    height: 1px;
    background: #000;
`

export const ButtonContainer = styled.div`
    margin: 10px 0; 
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;

export const MarkdownButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    flex: 1 1 auto; 

    display: flex;
    justify-content: center;
    align-items: center;

    width: 18px;
    height: 35px;

    &:hover {
        background: var(--DarkGray-95, #EEE);
        color: black;
    }
`;

export const ButtonTitleImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 20px;
`

export const ButtonBoldImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7px;
    height: 20px;
`

export const ButtonItalicImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3px;
    height: 20px;
`

export const ButtonStrokeImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9px;
    height: 20px;
`

export const ButtonQuoteImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
`

export const ButtonImageImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13px;
    height: 13px;
`

export const ButtonCodeImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
`

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
    border: none;
    outline: none;
`;

export const Preview = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    border-left: 1px solid #ccc;
    box-sizing: border-box; 
    overflow-y: auto;

    h1, h2, h3, h4 {
        color: var(--Neutral-0, #000);
        font-family: Pretendard;
        font-weight: 700;
    }

    h1 {
        font-size: 32px; 
        line-height: 130%;
    }

    h2 {
        font-size: 28px;
        line-height: 130%; /* 36.4px */
    }

    h3 {
        font-size: 24px;
        line-height: 130%; /* 31.2px */
    }

    h4 {
        font-size: 20px;
        line-height: 130%; /* 26px */
    }

    strong {
        font-weight: 700;
    }

    em {
        font-style: italic; 
        display: inline-block; 
    }

    del {
        text-decoration: line-through; 
    }

    blockquote {
        position: relative;
        border-left: 0; 
        background: rgba(243, 243, 243, 0.6); 
        padding: 0px 0px 0px 25px;
        margin: 0;
        overflow: hidden;
        line-height: 1.5; 
        white-space: pre-wrap;
    }

    blockquote::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        background: #1A9A18;
        border-radius: 3px 0 0 3px; 
    }
`;

export const LanguageSelector = styled.select`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    font-family: Pretendard;
    font-size: 13px;
    color: var(--Neutral-60, #858585);
    background-color: #fff;
    margin-bottom: 10px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;