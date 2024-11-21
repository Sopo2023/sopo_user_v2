import React, { Dispatch, SetStateAction, useState } from "react";
import TextField from "src/components/textFields";
import { Sign } from "src/types/auth/signup.type";
import Button from "src/components/button/index";
import arrowLeft from "src/assets/imgs/Signimg/arrow-left.svg";
import * as Auth from "../style"

interface Props {
  setSection: Dispatch<SetStateAction<string>>;
  signupData: Sign;
  handleSignupData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  submitSignupDataSecond: () => void;
  keydownButton: (e: React.KeyboardEvent) => void;
}

const SignupSecond = ({
  setSection,
  signupData,
  handleSignupData,
  keydownButton,
  submitSignupDataSecond,
}: Props) => {
  return (
    <>
      <Auth.InputContainer>
        <Auth.SignBack onClick={() => setSection("first")}>
          <img src={arrowLeft} alt="imgError" />
          <span>돌아가기</span>
        </Auth.SignBack>
        <Auth.InputText>
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
        </Auth.InputText>
        <Auth.InputText>
          <span>
            학교<p>*</p>
          </span>
          <Auth.selectButton
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
          </Auth.selectButton>
        </Auth.InputText>
       
      </Auth.InputContainer>
      <Button text="다음" style={{}} onClick={submitSignupDataSecond} />
    </>
  );
};
export default SignupSecond;
