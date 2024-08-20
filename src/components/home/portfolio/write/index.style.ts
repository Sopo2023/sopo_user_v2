import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    /* align-items: center; */
    width: 100%; 
    padding: 10px 10px; 
    box-sizing: border-box;
    margin-left: -30px;
`;

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
`;

export const PageImg = styled.img`
    width: 15px;
    height: 15px;
    filter: invert(1);
`;

export const PageTitle = styled.span`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; 
    margin-left: 10px;
    flex: 1; 
`;

export const ContainerParents = styled.div`
    background: #F7FFF3;
    padding-top: 48px;
    height: calc(100vh - 48px);
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-x: auto; 
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
    /* justify-content: center; */
    align-items: stretch;
    min-width: 353px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto; 
    }
`;

export const EditorContainer = styled.div`
    width: 100%;
    padding: 20px 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    /* min-width: 353px; */

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
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
    margin-right: 10px;

    &:hover {
        background: #F3F3F3;
    }
`

export const TitleInput = styled.input`
    color: var(--Neutral-60, #858585);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 100% */
    padding-top: 20px;
    margin-bottom: 10px;
    border: none;
    outline: none;
`;

export const SepLine = styled.div`
    width: 71px;
    height: 1px;
    background: #000;
    margin: 17px 0 17px 0;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px 0;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    background-color: #FAFAFA;
    min-height: 40px;
`;

export const Tag = styled.span`
    background-color: #1A9A18;
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
`;

export const TextArea = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: none;
    font-family: Pretendard;
    font-size: 14px;
    color: #656565;
    min-width: 100px;
    padding: 5px 0;
`;

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
export const SaveBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    /* max-width: 420px;  */
    height: auto; 
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    padding: 10px;
    margin-top: 10px;
    flex-wrap: wrap; 
    gap: px;
    box-sizing: border-box;
    position: sticky; 
    bottom: 0;
    z-index: 10;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: stretch; 
    }
`;



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
    flex-wrap: wrap; 
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