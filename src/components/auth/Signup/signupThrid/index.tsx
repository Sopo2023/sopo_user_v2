import React, { Dispatch, SetStateAction } from "react";
import { Sign } from "src/types/auth/signup.type";
import TextField from "src/components/textFields";
import * as Auth from "../style";
import Button from "src/components/button";
import arrowLeft from "src/assets/imgs/Signimg/arrow-left.svg";

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
    keydownButton,
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
          <Auth.emailTextField>
            <TextField
              name="memberEmail"
              value={signupData.memberEmail}
              type="text"
              onChange={handleSignupData}
              placeholder="이메일을 입력해주세요"
              onKeyDown={emailKeydownButton}
              style={{ width: "70%" }}
            />
            <Auth.emailNumberButton onClick={chckEmailAuthCode}>
              <span>인증하기</span>
            </Auth.emailNumberButton>
          </Auth.emailTextField>
        </Auth.InputText>
        <Auth.InputText>
          <Auth.emailPostField>
            <span>
              {" "}
              이메일 인증번호<p>*</p>
            </span>
            <p>
            {isWaiting === "전송중"
              ? "이메일 전송중.."
              : isWaiting === "전송성공"
              ? "이메일 전송성공"
              : ""}
              </p>
          </Auth.emailPostField>
          <TextField
            name="authCode"
            value={signupData.authCode.toUpperCase()}
            type="text"
            onChange={handleSignupData}
            placeholder="인증번호를 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </Auth.InputText>
    </Auth.InputContainer>
        <Button text="회원가입" style={{}} onClick={SubmitSignupDataThird} />
     </>
)
}
export default SignupThird;