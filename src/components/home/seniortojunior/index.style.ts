
import styled from "styled-components";

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
    flex-direction: column;
    justify-content: flex-start;  
    align-items: flex-start;     
    min-width: 353px; 

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
