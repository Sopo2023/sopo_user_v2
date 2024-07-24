import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "src/hooks/auth/useLogin";
import TextField from "src/components/textFields/index";
import * as S from "./style";
import { LogoVeiw, SignMain, Header } from "../style";
import Logo from "src/assets/imgs/Signimg/loginLogo.svg";
import Button from "src/components/button/index";
import { Props } from "src/types/auth/login.types";

const LoginComponent = ({ setIsLogin }: Props) => {
  const { ...auth } = useLogin();
  return (
    <>
      <LogoVeiw>
        <img src={Logo} alt="난 실패작이야.." />
      </LogoVeiw>
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
              name="id"
              value={auth.LoginData.id}
              type="text"
              onChange={auth.handleSigUpData}
              placeholder="아이디를 입력해주세요"
              onKeyDown={auth.handleKeyDown}
              style={{}}
            />
          </S.Inputtext>
          <S.Inputtext>
            <span>
              비밀번호 <p>*</p>
            </span>
            <TextField
              name="password"
              value={auth.LoginData.password}
              type={"password"}
              onChange={auth.handleSigUpData}
              placeholder="비밀번호를 입력해주세요"
              onKeyDown={auth.handleKeyDown}
              style={{}}
            />
          </S.Inputtext>
        </S.Input>

        <S.buttonBox>
          <Button text="로그인" style={{}} onClick={auth.handleLogin} />
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
