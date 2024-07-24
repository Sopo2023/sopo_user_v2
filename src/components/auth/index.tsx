import React,{useState} from "react";
import * as S from "./style";
import Vector1 from "src/assets/imgs/Signimg/Vector1.1.png";
import Vector2 from "src/assets/imgs/Signimg/Vector2.2.png";
import Vector3 from "src/assets/imgs/Signimg/Vector3.png";
import Login from "./Login/index";
import Signup from "./Signup/index";



const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <S.authBackground>
      <S.vector1 src={Vector1} />
      <S.vector2 src={Vector2} />
      <S.vector3 src={Vector3} />
      <S.mainVeiw>
      {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Signup setIsLogin={setIsLogin} />
          )}{

        }
      </S.mainVeiw>
    </S.authBackground>
  );
};
export default Auth;
