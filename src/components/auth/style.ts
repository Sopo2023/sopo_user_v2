import styled,{keyframes} from "styled-components";
import color from "src/styles/color";

const vectorAnmation = keyframes` 
0%{
       bottom: -300px;
}
`;

export const authBackground = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #b8e0b7;
`;
export const SignMain = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media only screen and (min-width: 800px){
    align-items: center;
    min-width: 485px;
  }
  width: 90%;
  padding: 36px;
  max-width: 480px;

  min-height: 541px;
  @media only screen and (min-width: 800px){
    min-width: 480px;
  }
  background-color: ${color.Background.Normal.Alternative};
  border-radius: 25px;

`;
export const vector1 = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 357px;
  flex-shrink: 0;
  z-index: 3;
  animation: ${vectorAnmation} 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;

export const vector2 = styled.img`
  position: absolute;
  bottom: 129px;
  width: 100%;
  height: 401px;
  flex-shrink: 0;
  z-index: 2;
  animation: ${vectorAnmation} 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;

export const vector3 = styled.img`
  position: absolute;
  bottom: 408px;
  width: 100%;
  height: 448px;
  flex-shrink: 0;
  animation: ${vectorAnmation} 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;

export const mainView = styled.div`
  display: flex;
  width: 1000px; 
  
  height: 565px;
  gap: 10px;
  z-index: 5;
  @media only screen and (max-width: 800px){
    justify-content: center; 
    align-items: center;
  }
  
  justify-content: space-between;
`;
export const LogoView = styled.div`
  display: flex;
  align-items: end;
  width: 50%;
  height: 100%;
  @media only screen and (max-width: 800px){
    display: none;
  }
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
  color: ${color.Label.Strong};
  align-items: center;
  span {
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
`;