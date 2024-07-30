import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`

export const MarkImg = styled.div`
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #1A9A18;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
`

export const PageImg = styled.img`
    width: 15px;
    height: 15px;
    filter: invert(1);
`

export const PageTitle = styled.span`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 130% */
`

export const ContainerParents = styled.div`
    background: #F7FFF3;
    padding-top: 48px;
    height: calc(100vh - 48px);
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    height: 90%;
    max-height: 710px;
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    min-width: 353px; 

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const EditorContainer = styled.div`
    width: 50%;
    padding: 20px 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    min-width: 353px;

    @media (max-width: 768px) {
        width: 100%;
        min-width: 353px;
    }
`;

export const BackArrowImg = styled.img`
    width: 21px;
    height: 11px;
`

export const BackArrowButton = styled.button`
    cursor: pointer;
    width: 37px;
    height: 37px;
    border: none;
    border-radius: 100%;
    background: none;
    

    &:hover{
        background: #F3F3F3;
    }
`



export const TitleInput = styled.input`
    color: var(--Neutral-5, #0A0A0A);
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 800;
    line-height: 130%;
    padding-top: 20px;
    margin-bottom: 10px;
    border: none;
    outline: none;
`;

export const SepLine = styled.div`
    width: 71px;
    height: 1px;
    background: #000;
`;

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
    width: 15px;
    height: 20px;
`;

export const ButtonBoldImg = styled.img`
    width: 7px;
    height: 20px;
`;

export const ButtonItalicImg = styled.img`
    width: 3px;
    height: 20px;
`;

export const ButtonStrokeImg = styled.img`
    width: 9px;
    height: 20px;
`;

export const ButtonQuoteImg = styled.img`
    width: 10px;
    height: 10px;
`;

export const ButtonImageImg = styled.img`
    width: 13px;
    height: 13px;
`;

export const ButtonCodeImg = styled.img`
    width: 16px;
    height: 16px;
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
    font-weight: 400;
    line-height: 20px;
    border: none;
    outline: none;
`;

export const SaveBar = styled.div`
    display: flex;
    align-items: center;
    width: 420px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    padding: 0 10px; 
`

export const GoOutButton = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
`

export const LeftArrow = styled.img`
    width: 15px;
    height: 12px;
    transform: scaleX(-1);
    margin-left: 20px;
`

export const GoOutText = styled.span`
    color: #828282;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 700;
    line-height: 26px;
    padding-left: 10px;

    &:hover {
        color: black;
    }
`

export const SaveButton = styled.div`
    display: flex;
    margin-left: auto;
    gap: 10px; 
`

export const TemporarySave = styled.button`
    width: 77px;
    height: 32px;
    color: var(--Green-50, #1A9A18);
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 3px;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        background: #F3F3F3;
    }
`

export const PostButton = styled.button`
    width: 77px;
    height: 32px;
    color: var(--Neutral-100, #FFF);
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 3px;
    background: #1A9A18;
    border: none;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        background: var(--Color-Primary-Heavy, #136D11);
    }
`

export const PreviewContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 60px;
    border-left: 1px solid #ccc;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const PreviewTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
`

export const Preview = styled.div`
    width: 100%;
    height: 100%;

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
        line-height: 130%;
    }

    h3 {
        font-size: 24px;
        line-height: 130%;
    }

    h4 {
        font-size: 20px;
        line-height: 130%;
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

export const RealTitle = styled.div`
    color: var(--Neutral-0, #000);
    font-family: Pretendard;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;

    padding: 25px 0px;
`

export const ContextSepLine = styled.div`
    width: 71px;
    height: 1px;
    background: #000;
    margin-bottom: 30px;
`