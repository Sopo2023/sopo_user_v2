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
    overflow-y: auto; 
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px 20px 70px 20px;
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
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 100% */
    padding-top: 20px;
    margin-bottom: 10px;
    border: none;
    outline: none;

    ::placeholder{
        color: var(--Neutral-60, #858585);
    }
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
    padding: 10px 20px;
    align-items: center;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    background-color: #FAFAFA;
    min-height: 40px;
`;

export const Tag = styled.span`
    background-color: #1A9A18;
    color: white;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px; 
    height: 25px;
    text-align: center; 
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

export const OneLineAboutME = styled.textarea`
    width: 100%;
    min-height: 20px;
    border: none;
    padding: 10px;
    color: balck;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */
    margin-top: 20px;
    box-sizing: border-box;
    resize: none;

    ::placeholder {
        color: #B0B0B0;
    }

    &:focus {
        border-color: #1A9A18;
        outline: none;
    }
`;

export const SchoolContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    position: relative;
`;

export const SchoolList = styled.div`
    max-height: 240px; 
    overflow-y: auto; 
    padding-right: 10px;
    box-sizing: border-box;
`;

export const SemiTitle = styled.div`
    color: #000;

    /* Headline2/Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */

    margin-bottom: 10px;
`

export const NoSchoolMessage = styled.div`
    color: var(--Color-Label-Assistive, #999);

    /* Body/Medium */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin: 20px 0 ;
`;

export const SchoolRow = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    gap: 10px;
`;

export const SchoolInput = styled.textarea`
    flex: 1;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    padding: 10px;
    color: #656565;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    box-sizing: border-box;
    resize: none;
    ::placeholder {
        color: #B0B0B0;
    }
    &:focus {
        border-color: #1A9A18;
        outline: none;
    }
`;

export const RemoveSchoolButton = styled.button`
    width: 28px;
    height: 28px;
    color: white;
    border: none;
    border-radius: 100%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #F3F3F3;
    }
`;

export const RemoveSchoolButtonImg = styled.img`
    width: 15px;
    height: 15px;
`

export const AddSchoolButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    background: #1A9A18;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    font-family: Pretendard;
    &:hover {
        background: #136D11;
    }
`;

export const AddIcon = styled.img`
    width: 15px;
    height: 15px;
    filter: invert(1);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const RemoveAllButton = styled.button`
    background: #FF6F6F;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    font-family: Pretendard;
    &:hover {
        background: #FF4C4C;
    }
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

export const SaveBarContainer = styled.div`
     display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    box-sizing: border-box;
    width: 100%;
    position: sticky;
    bottom: 0;
    z-index: 100;
    background: #FFF;
    padding: 10px;
    margin-top: auto;
`

export const SaveBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1000px; 
    height: auto; 
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    padding: 10px;
    margin-top: auto; 
    flex-wrap: wrap; 
    gap: 10px; 
    box-sizing: border-box;
    position: relative;

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