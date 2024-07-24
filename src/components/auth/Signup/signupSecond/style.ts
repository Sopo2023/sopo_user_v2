import styled from "styled-components";
import color from "src/styles/color";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  gap: 16px;
`;
export const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 27%;
  span {
    color: ${color.Label.Strong};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    p {
      display: inline-block;
      color: ${color.Status.Destructive};
    }
  }
`;