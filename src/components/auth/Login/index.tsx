import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "src/hooks/auth/useLogin";
import TextField from "src/components/textFields/index";
import * as S from "./style";
import Vector1 from "src/assets/imgs/Signimg/Vector1.1.png";
import Vector2 from "src/assets/imgs/Signimg/Vector2.2.png";
import Vector3 from "src/assets/imgs/Signimg/Vector3.png";
import Logo from "src/assets/imgs/Signimg/loginLogo.svg";
import Button from "src/components/button/index";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { ...auth } = useLogin();
  return (
    <S.main>
      <S.vector1 src={Vector1} />
      <S.vector2 src={Vector2} />
      <S.vector3 src={Vector3} />
      <S.mainVeiw>
        <S.LogoVeiw>
          <img src={Logo} alt="난 실패작이야.." />
        </S.LogoVeiw>
        <S.loginMain>
          <S.Header>
            <span>다시 만나 반가워요</span>
          </S.Header>
          <S.Input>
            <S.Inputtext>
              <span>
                아이디 <p>*</p>
              </span>
              <TextField
                value={auth.id}
                type="text"
                onChange={(e) => auth.setId(e.target.value)}
                placeholder="이메일을 입력해주세요"
                onKeyDown={auth.handleKeyDown}
                style={{}}
              />
            </S.Inputtext>
            <S.Inputtext>
              <span>
                비밀번호 <p>*</p>
              </span>
              <TextField
                value={auth.password}
                type={"password"}
                onChange={(e) => auth.setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                onKeyDown={auth.handleKeyDown}
                style={{}}
              />
            </S.Inputtext>
          </S.Input>

          <S.buttonBox>
            <Button text="로그인" style={{}} onClick={auth.handleLogin} />
            <span>
              계정이 없으시다면? <strong>회원가입</strong>
            </span>
          </S.buttonBox>
        </S.loginMain>
      </S.mainVeiw>
    </S.main>
  );
};

export default LoginComponent;
