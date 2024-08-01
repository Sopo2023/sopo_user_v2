import styled from 'styled-components';

export const ProfileWrap = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 4.44vh;
    width: 100%;
    height: calc(100% - 4.44vh);
    align-items: center;
    justify-content: center;
`;

export const MainWrap = styled.main`
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
    position: relative;
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

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.h2`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
`;

export const ReturnIcon = styled.img`
    position: fixed;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    margin-right: 10vw;
`;

export const DetailWrap = styled.div`
    width: 63vw;
    height: 50vh;
    margin-top: 4vh;
    background-color: #F7F7F7;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
`;

export const SectionTitle = styled.span`
    font-size: 1em;
    margin-top: 1.3rem;
    margin-left: 1.3rem;
    margin-bottom: 1rem;
    display: block;
    color: #5C5C5C;
`;

export const Detail = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-left: 4vw;
`;

export const DetailLabel = styled.span`
    font-size: 1em;
    font-weight: bold;
    color: #333;
    width: 20%;
`;

export const DetailContainer = styled.div`
    display: flex;
    align-items: center;
    width: 75%; 
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 0; 
    margin: 1rem 0; 
    text-align: center; 
`;

export const DetailValue = styled.span`
    font-size: 1em;
    color: #666;
    width: 70%;
    display: flex;
`;

export const EditButton = styled.button`
    background: none;
    border: none;
    color: #178415;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    width: 20%;
    text-align: center; 
    padding: 0.5rem 0; 
    display: flex;
    justify-content: center;
`;