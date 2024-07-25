import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const MainContent = styled.div`
    display: flex;
    flex: 1;
`;

export const ContentArea = styled.div`
    flex: 1;
    box-sizing: border-box;
    background: #f7f7f7; 
    overflow-y: auto;
`;