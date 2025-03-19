import styled from "styled-components";

export const Container = styled.main`
   background: #F7FFF3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 
`
export const competitionVeiw = styled.div`
    width: 90%;
    max-width: 1100px;
    height: 80%;
    
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 353px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`

export const PostsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    justify-items: center;  

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{isActive:boolean}>`
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isActive ? "#007BFF" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;