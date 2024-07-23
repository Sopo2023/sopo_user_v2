import styled from "styled-components";
import color from "src/styles/color";

export const Text_Field_Main = styled.div<{$isActive: boolean }>`
  display: flex;
  /* width: 320px; */
  height: 35px;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border-color:  ${({ $isActive }) => ($isActive ? "1A9A18"  : "#c4c4c4")}; 
  border: 1px solid ${color.Label.Disable};
  background: #fff;
  
  img {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;

export const Text_Field = styled.input`
  &::placeholder {
    color: ${color.Label.Disable};

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  display: flex;
  width: 80%;
  height: 20px;
  padding: 10px 20px 10px 10px;
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
  background: #fff;
`;
