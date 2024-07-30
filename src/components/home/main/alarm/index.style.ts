import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Layout = styled.div`
  width: 620px;
  height: 270px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
`;
export const Padding = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 30px 25px;
`;
export const Head = styled.div`
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;
export const HeadImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const HeadText = styled.p`
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;
export const BodyHead = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

interface TypeProps {
  isActive: boolean;
}

export const Type = styled.p<TypeProps>`
  color: ${(props) => (props.isActive ? "#0e0e0e" : "#797979")};
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
`;

export const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

export const NotificationText = styled.span`
  color: #333;
`;

export const ApprovalButton = styled.button`
  color: #2e7d32;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
