import styled from "styled-components";
import color from "src/styles/color";
import ExpandDown from "src/assets/imgs/Signimg/Expand_down.svg";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  gap: 5px;
`;
export const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 40%;
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
export const ButtonBx = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  height: 50px;
  align-items: center;
  span {
    color: ${color.Label.Disable};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    strong {
      color: ${color.Primary.Light};
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
      cursor: pointer;
    }
  }
`;

export const buttonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20px;
  align-items: center;
  span {
    color: ${color.Label.Disable};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    strong {
      color: ${color.Primary.Light};
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
      cursor: pointer;
    }
  }
`;


export const SignBack = styled.div`
  position: absolute;
  gap: 10px;
  top: 20px;
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

