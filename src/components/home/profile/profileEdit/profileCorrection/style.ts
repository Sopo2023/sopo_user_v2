import styled from 'styled-components';

export const ModalOverlay = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2; 
`;



export const ModalContainer = styled.main`
    width: 52vw;
    height: 55vh;
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    overflow: hidden;
`;

export const Title = styled.span`
    margin-top: 100px;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const pwTitle = styled.span`
    margin-top: 50px;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Select = styled.select`
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    width: 30vw;
    height: 6vh;
    font-size: 15px;
    text-indent: 10px;
`;

export const Input = styled.input`
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    width: 30vw;
    height: 6vh;
    font-size: 15px;
    text-indent: 10px;
`;

export const buttonWrap = styled.div`
    margin-top: 6vh;
`;

export const saveButton = styled.button`
    width: 7vw;
    height: 5vh;
    border-radius: 15px;
    border: 1px solid #66BB64;
    background-color: #66BB64;
    color: #FFFFFF;
    font-size: 15px;
    margin: 20px;
`;

export const cancelButton = styled.button`
    width: 7vw;
    height: 5vh;
    border-radius: 15px;
    border: 1px solid #66BB64;
    background-color: #FFFFFF;
    color: #66BB64;
    font-size: 15px;
`;
