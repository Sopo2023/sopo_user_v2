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
  width: 650px;
  height: 270px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.12);
`;
export const Padding = styled.div`
  width: 590px;
  height: 230px;
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
