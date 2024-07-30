import styled from "styled-components";

export const post = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 899px;
  height: 346px;
  background-color: #fff;
  border-radius: 13px;
  padding: 10px;
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
  padding: 9px;

`;
