import React from "react";
import { useLogin } from "src/hooks/auth/useLogin";
import TextField from "src/components/textFields/index";
import * as S from "./style";
import { LogoView, SignMain, Header } from "../style";
import Logo from "src/assets/imgs/Signimg/loginLogo.svg";
import Button from "src/components/button/index";
import { Props } from "src/types/auth/login.types";

const LoginComponent = ({ setIsLogin }: Props) => {
  const { loginData, handleLoginDataChange, handleKeyDown, handleLogin, isLoading } = useLogin();

  return (
    <>
      <LogoView>
        <img src={Logo} alt="소포 로고" />
      </LogoView>
      <SignMain>
        <Header>
          <span>다시 만나 반가워요</span>
        </Header>
        <S.Input>
          <S.Inputtext>
            <span>
              아이디 <p>*</p>
            </span>
            <TextField
              name="memberId"
              value={loginData.memberId}
              type="text"
              onChange={handleLoginDataChange}
              placeholder="아이디를 입력해주세요"
              onKeyDown={handleKeyDown}
              style={{}}
            />
          </S.Inputtext>
          <S.Inputtext>
            <span>
              비밀번호 <p>*</p>
            </span>
            <TextField
              name="memberPassword"
              value={loginData.memberPassword}
              type="password"
              onChange={handleLoginDataChange}
              placeholder="비밀번호를 입력해주세요"
              onKeyDown={handleKeyDown}
              style={{}}
            />
          </S.Inputtext>
        </S.Input>

        <S.buttonBox>
          <Button 
            text={isLoading ? "로그인 중..." : "로그인"} 
            onClick={handleLogin}
            style={{}}
          />
          <span>
            계정이 없으시다면?{" "}
            <strong onClick={() => setIsLogin(false)}>회원가입</strong>
          </span>
        </S.buttonBox>
      </SignMain>
    </>
  );
};

export default LoginComponent;
