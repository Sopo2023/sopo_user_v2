import styled from "styled-components";
import color from "src/styles/color";
export const authCodeBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 5%;
    div{
      display: flex;
      width: 80%;
      gap: 5%;

    }
`

export const emailNumberButton = styled.div`
  display: flex;
  min-width: 100px;
  padding: 0 5px;
  height: 50px;
  background: ${color.Primary.Light};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    color: #fff;
  }
`;

export const emailTextField = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
`;
export const emailPostField = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.Label.Strong};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  span {
    
    p {
      display: inline-block;
      color: ${color.Status.Destructive};
    }
  }
  p{
    color: ${color.Primary.Light};
  }
`;
