import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import styled from 'styled-components';

export const PageTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 41px 36px;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 16px; 
`;

export const ImgWrap = styled.div`
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #1A9A18;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageTitleImg = styled.img`
    width: 15px;
    height: 15px;
    filter: invert(1);
`;

export const PageTitleText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; 
    flex-shrink: 0;
`;

export const ArrowImg = styled.img`
    transform: rotate(-45deg);
    width: 17.399px;
    height: 13.92px;
`;

export const LastestImg = styled.img`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`;

export const ButtonText = styled.button`
    display: flex;
    align-items: center;

    color: var(--DarkGray-60, #787878);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    background: none;

    cursor: pointer;

    margin-left: 10px;
    flex-shrink: 0;
    white-space: nowrap; 

    transition: all 0.3s ease;

    &:hover{
        color:#000;
    }

    img{
        margin-left: 5px;
    }
`;

export const SearchIconWrap = styled.div`
    border: none;
    background-color: none;
`

export const SearchBox = styled.form`
    display: flex;
    align-items: center;
    border-radius: 100px;
    border: 1.5px solid var(--Primary-Color---Green-500, #1A9A18);
    background: #FFF;
    padding: 8px 12px;
    flex-grow: 1;
    max-width: 600px;
    min-width: 200px;
    margin: 0 16px; 
    flex: 1 1 auto;
`;

export const SearchInput = styled.input`
    color: var(--Secondly-Color---LightGray-600, #C5C5C5);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 18.2px */
    border: none;
    outline: none;
    flex-grow: 1;
    min-width: 0; 
`;

export const SearchIconImg = styled.img`
    width: 25px;
    height: 25px;
    flex-shrink: 0;

    &:hover{
        filter: brightness(70%);
    }
`;

export const StartWirteButton = styled.button`
    padding: 10px 20px;
    border: none;

    background-color: #1A9A18;
    color: var(--Neutral-100, #FFF);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 153.846% */

    cursor: pointer;

    display: inline-block;
    border-radius: 4px;

    transition: all 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0; 
    margin: 8px 0; 

    &:hover{
        background-color: #136D11;
    }
`;