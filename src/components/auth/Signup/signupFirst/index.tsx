import React,{ Dispatch, SetStateAction} from "react";
import * as S from "./style";
import TextField from "src/components/textFields";
import Button from "src/components/button/index";
import { Sign } from "src/types/auth/signup.type";

interface Props {
  signupData: Sign;
  handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitSignupDataFirst: () => void;
  keydownButton: (e: React.KeyboardEvent) => void;
}

const SignupFirst = ({
  signupData,
  handleSignupData,
  keydownButton,
  submitSignupDataFirst
}: Props) => {

  return (
    <>
      <S.InputContainer>
        
        <S.InputText>
          <span>
            아이디<p>*</p>
          </span>
          <TextField
            name="memberId"
            value={signupData.memberId}
            type="text"
            onChange={handleSignupData}
            placeholder="아이디를 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
        <S.InputText>
          <span>
            비밀번호<p>*</p>
          </span>
          <TextField
            name="memberPassword"
            value={signupData.memberPassword}
            type={"password"}
            onChange={handleSignupData}
            placeholder="비밀번호를 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
        <S.InputText>
          <span>
            비밀번호 확인<p>*</p>
          </span>
          <TextField
            name="memberChckPassword"
            value={signupData.memberChckPassword}
            type={"password"}
            onChange={handleSignupData}
            placeholder="비밀번호을 입력해주세요"
            onKeyDown={keydownButton}
            style={{}}
          />
        </S.InputText>
      </S.InputContainer>
      <S.ButtonBx>
        <Button text="다음" style={{}} onClick={submitSignupDataFirst}/>
      </S.ButtonBx>
    </>
  );
};
export default SignupFirst;
