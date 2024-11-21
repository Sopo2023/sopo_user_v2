import React, { Dispatch, SetStateAction } from "react";
import { Sign } from "src/types/auth/signup.type";
import TextField from "src/components/textFields";
import { WAITINGENUM } from "src/constants/authWaitingEnum/authWaitingEnum";
import Button from "src/components/button";
import arrowLeft from "src/assets/imgs/Signimg/arrow-left.svg";
import CodeTextField from "src/components/codeTextField";
import * as Auth from "../style";
import * as S from "./style";


interface Props {
    setSection: Dispatch<SetStateAction<string>>;
    signupData: Sign;
    handleSignupData: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    emailKeydownButton: (e: React.KeyboardEvent) => void;
    SubmitSignupDataThird: () => void;
    keydownButton: (e: React.KeyboardEvent) => void;
    chckEmailAuthCode: () => void;
    isWaiting: string;
  }

const SignupThird = ({
    setSection,
    signupData,
    handleSignupData,
    SubmitSignupDataThird,
    chckEmailAuthCode,
    emailKeydownButton,
    isWaiting,
  }: Props)=>{
    console.log(signupData);
    
return(
    <>
    <Auth.InputContainer>
    <Auth.SignBack onClick={() => setSection("second")}>
          <img src={arrowLeft} alt="돌아가라 어리석은것" />
          <span>돌아가기</span>
        </Auth.SignBack>
     <Auth.InputText>
          <span>
            이메일<p>*</p>
          </span>
          <S.emailTextField>
            <TextField
              name="memberEmail"
              value={signupData.memberEmail}
              type="text"
              onChange={handleSignupData}
              placeholder="이메일을 입력해주세요"
              onKeyDown={emailKeydownButton}
              style={{ width: "70%" }}
            />
            <S.emailNumberButton onClick={chckEmailAuthCode}>
              <span>{isWaiting === WAITINGENUM.spend ? "이메일 전송중": isWaiting === WAITINGENUM.success
              ? "이메일 전송성공"
              : "인증하기" }</span>
            </S.emailNumberButton>
          </S.emailTextField>
        </Auth.InputText>
        <Auth.InputText>
          <S.emailPostField>
            <span>
              {" "}
              이메일 인증번호<p>*</p>
            </span>
          </S.emailPostField>
          <S.authCodeBox>
            <div>
          <CodeTextField 
          onChange={handleSignupData}
          />
          </div>
          </S.authCodeBox>
          
        </Auth.InputText>
    </Auth.InputContainer>
        <Button text="회원가입" style={{}} onClick={SubmitSignupDataThird} />
     </>
)
}
export default SignupThird;