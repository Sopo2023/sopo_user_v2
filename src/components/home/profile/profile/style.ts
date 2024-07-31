import styled from 'styled-components';

export const profileWrap = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 4.44vh;
    width: 100%;
    height: calc(100% - 4.44vh);
    align-items: center;
    justify-content: center;
`;

export const mainWrap = styled.main`
    width: 72vw;
    height: 80vh;
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column; 
    align-items: center; 
    padding: 15px;
`;

export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
    height: 10vh;
    margin-top: 4vh;
    padding-left: 5vw; 
`;

export const AvatarContainer = styled.div`
    position: relative;
    margin-right: 1.25rem;
`;

export const Avatar = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.h2`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
`;

export const ButtonContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
`;

export const EditButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

export const SettingsButton = styled.button`
    background-color: #F3F3F3;
    color: #1A9A18;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
        background-color: #EEEEEE;
    }
`;

export const PencilIconContainer = styled.div`
    background-color: #178415;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0.18rem;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PencilIcon = styled.img`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    z-index: 1;
`;

export const SelectWrap = styled.div`
    width: 100%;
    height: 10vh;
    display: flex; 
    align-items: center; 
    padding-left: 0.1vw; 
`;

export const Span = styled.span<{ isSelected: boolean }>`
    cursor: pointer;
    position: relative;
    color: ${({ isSelected }) => (isSelected ? "#178415" : "#808080")};
    font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
    font-size: 20px;
    margin-left: 50px;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: ${({ isSelected }) => (isSelected ? "100%" : "0")};
        height: 2px;
        background: #136D11;
        transition: width 0.4s;
    }
`;

export const emptyWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    text-align: center;
    
    img {
        margin-bottom: 1.5rem;
    }

    span {
        color: #808080;
        font-size: 1.5rem;
    }
`;