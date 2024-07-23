import styled from "styled-components";

export const main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #b8e0b7;
`;
export const loginMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 36px;
  min-width: 485px;
  min-height: 541px;
  background-color: #fff;
  border-radius: 25px;
`;
export const vector1 = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 357px;
  flex-shrink: 0;
  z-index: 3;
`;

export const vector2 = styled.img`
  position: absolute;
  bottom: 129px;
  width: 100%;
  height: 401px;
  flex-shrink: 0;
  z-index: 2;
`;

export const vector3 = styled.img`
  position: absolute;
  bottom: 408px;
  width: 100%;
  height: 448px;
  flex-shrink: 0;
`;

export const mainVeiw = styled.div`
  display: flex;
  width: 1000px;
  height: 565px;
  gap: 10px;
  z-index: 5;
  justify-content: space-between;
`;
export const LogoVeiw = styled.div`
  display: flex;
  align-items: end;
  width: 50%;
  height: 100%;
  img {
    width: 531px;
    height: 455px;
    display: flex;
    z-index: 4;
  }
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  color: #000;
  align-items: center;
  span {
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
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
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    p{
      display: inline-block;
      color: red;
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
    color: var(--Gray-Gray600, #787878);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    strong {
      color: var(--Primary-Color---Green-400, #48ae46);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
      cursor: pointer;
    }
  }
`;
