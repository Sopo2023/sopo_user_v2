import styled from "styled-components";

export const post = styled.main`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 346px;
  background-color: #fff;
  border-radius: 13px;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
`;
export const titleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 50px;
  gap: 12px;
  img {
    display: flex;
    width: 30px;
    height: 30px;
  }
  span {
    width: 120px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
`;
export const contentContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px;
  gap: 21px;
`;
export const nullcontainer=styled.section`
display: flex;
justify-content:center ;
align-items: center;
width: 100%;
height: 100%;
cursor: pointer;
`