import styled from "styled-components";
import color from "src/styles/color";

export const ButtonBox = styled.button`
  display: flex;
  width: 421px;
  height: 54px;
  padding: 12px 180px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background: ${color.Primary.Light};

  color:  #fff;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  cursor: pointer;
`;
