import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import TextField from "src/components/textFields";
import { Sign } from "src/types/auth/signup.type";
import Button from "src/components/button/index";
import arrowLeft from "src/assets/imgs/Signimg/arrow-left.svg";

interface Props {
  setSection: Dispatch<SetStateAction<string>>;
  signupData: Sign;
  handleSignupData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  emailKeydownButton: (e: React.KeyboardEvent) => void;
  submitSignupDataSecond: () => void;
  keydownButton: (e: React.KeyboardEvent) => void;
  chckEmailAuthCode: () => void;
  isWaiting: string;
}

const SignupSecond = ({
  setSection,
  signupData,
  handleSignupData,
  keydownButton,
  submitSignupDataSecond,
  chckEmailAuthCode,
  emailKeydownButton,
  isWaiting,
}: Props) => {
  return (
    <>
      <S.InputContainer>
        <S.SignBack onClick={() => setSection("first")}>
          <img src={arrowLeft} alt="돌아가라 어리석은것" />
          <span>돌아가기</span>
        </S.SignBack>
        <S.InputText>
          <span>
            이름<p>*</p>
          </span>
          <TextField
            name="memberName"
            value={signupData.memberName}
            type="text"
            onChange={handleSignupData}
            placeholder="이름을 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
        <S.InputText>
          <span>
            학교<p>*</p>
          </span>
          <S.selectButton
            name="memberSchool"
            value={signupData.memberSchool}
            onChange={handleSignupData}
          >
            <option value="" selected >학교를 선택해주세요</option>
            <option value="대구소프트웨어마이스터고">
              대구소프트웨어마이스터고
            </option>
            <option value="부산소프트웨어마이스터고">
              부산소프트웨어마이스터고
            </option>
            <option value="광주소프트웨어마이스터고">
              광주소프트웨어마이스터고
            </option>
            <option value="대덕소프트웨어마이스터고">
              대덕소프트웨어마이스터고
            </option>
            <option value="기타" >
              기타
            </option>
          </S.selectButton>
        </S.InputText>
        <S.InputText>
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
              <span>인증하기</span>
            </S.emailNumberButton>
          </S.emailTextField>
        </S.InputText>
        <S.InputText>
          <S.emailPostField>
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
          </S.emailPostField>
          <TextField
            name="authCode"
            value={signupData.authCode}
            type="text"
            onChange={handleSignupData}
            placeholder="인증번호를 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
      </S.InputContainer>
      <Button text="회원가입" style={{}} onClick={submitSignupDataSecond} />
    </>
  );
};
export default SignupSecond;
