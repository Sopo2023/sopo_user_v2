import color from "src/styles/color";
import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 620px;
  height: 270px;
  gap: 10px;
  padding: 20px 30px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
`;
export const head = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const headText = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;
export const bodyHead = styled.div`
  width: 40%;
  height: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Type = styled.span<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#0e0e0e" : "#797979")};
  font-family: Pretendard;
  width: 60px;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
`;
export const NotificationView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 586px;
  height: 100%;
`;
export const NotificationItem = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: #f1f1f1;
  border-radius: 4px;

  span {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    p {
      color: ${color.Primary.Heavy};
      display: inline-block;
    }
  }
`;

export const ApprovalButton = styled.button`
  color: #1e9f27;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  background-color: transparent;
  border: none;

  cursor: pointer;
  &:hover {
   font-weight: 900;
  }
`;
