import styled from "styled-components";
import color from "src/styles/color";


export const main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #b8e0b7;
`;


export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 210px;
  gap: 16px;
`;
export const Inputtext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 50%;
  span {
    color: ${color.Label.Strong};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    p{
      display: inline-block;
      color: ${color.Status.Destructive};
    }
  }
`;
export const buttonBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  height: 50px;
  align-items: center;
  span {
    color: ${color.Label.Disable};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    strong {
      color: ${color.Primary.Light};
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
      cursor: pointer;
    }
  }
`;
