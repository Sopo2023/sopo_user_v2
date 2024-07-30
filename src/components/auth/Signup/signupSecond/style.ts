import styled, { keyframes } from "styled-components";
import ExpandDown from "src/assets/imgs/Signimg/Expand_down.svg";
import color from "src/styles/color";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 420px;
  gap: 12px;
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

export const SignBack = styled.div`
  position: absolute;
  gap: 10px;
  top: 10px;
  align-items: center;
  display: flex;
  width: 100px;
  height: 30px;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
  span {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
`;

export const selectButton = styled.select`
  height: 48px;
  border-radius: 12px;
  border: 1px solid ${color.Label.Disable};
  outline: none;
  padding: 0 40px 0 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${ExpandDown}) no-repeat right 10px center;
  background-size: 24px 24px;
  color: ${color.Label.Disable};

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const CertificationNumber = styled.div`
  width: 120px;
  height: 20px;
  display: inline-block;
  color: ${color.Primary.Light};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
`;

export const emailNumberButton = styled.div`
  display: flex;
  width: 100px;
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
`;
