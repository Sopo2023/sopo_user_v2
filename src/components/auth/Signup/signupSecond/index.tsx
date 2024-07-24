import React,{ Dispatch, SetStateAction} from "react";
import * as S from "./style";
import TextField from "src/components/textFields";
import { Sign ,SignupAgree} from "src/types/auth/signup.type";
import Button from "src/components/button/index";
import arrowLeft from "src/assets/imgs/Signimg/arrow-left.svg";


interface Props {
    setSection: Dispatch<SetStateAction<string>>;
    signupData: Sign;
    handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitSignupDataSecond: () => void;
    keydownButton: (e: React.KeyboardEvent) => void;
  }

const SignupSecond = ({ setSection,signupData,
    handleSignupData,
    keydownButton,
    submitSignupDataSecond,
    }:Props) => {
  return (
    <>
      <S.InputContainer>
        <S.SignBack onClick={()=>setSection("first")}>
            <img src={arrowLeft} alt="돌아가라 어리석은것" />
            <span>돌아가기</span>
        </S.SignBack>
        <S.InputText>
          <span>
            이름<p>*</p>
          </span>
          <TextField
            name="name"
            value={signupData.name}
            type="text"
            onChange={handleSignupData}
            placeholder="이름을 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
        <S.InputText>
          <span>
            이메일<p>*</p>
          </span>
          <TextField
            name="email"
            value={signupData.email}
            type="text"
            onChange={handleSignupData}
            placeholder="이메일을 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
        <S.InputText>
          <span>
            이메일 인증번호<p>*</p>
          </span>
          <TextField
            name="email"
            value={signupData.checkNumber}
            type="password"
            onChange={handleSignupData}
            placeholder="이메일을 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
      </S.InputContainer>
      <Button text="회원가입" style={{}} onClick={submitSignupDataSecond}/>
    </>
  );
};
export default SignupSecond;
