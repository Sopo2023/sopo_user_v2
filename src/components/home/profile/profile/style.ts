import styled from "styled-components";

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
    justify-content: center;
    padding: 15px;
`;

export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 10vh;
    margin-top: 5vh;
    margin-left: 5vw;
`;

export const AvatarContainer = styled.div`
    position: relative; // 상대 위치 설정
    margin-right: 1.25rem; // 프로필 정보와의 간격
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