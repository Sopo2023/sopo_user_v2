import styled from "styled-components";


export const Container = styled.div`
    width: 899px;
    height: 710px;
    flex-shrink: 0;

    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);

    display: flex;
`;

export const TextArea = styled.textarea`
    width: 50%;
    height: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    box-sizing: border-box; 
    resize: none;
    overflow-y: auto;
`;

export const Preview = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    border-left: 1px solid #ccc;
    box-sizing: border-box; 
    overflow-y: auto;
`;