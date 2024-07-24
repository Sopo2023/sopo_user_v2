import { ReactNode } from "react";
import useSignup from "src/hooks/auth/useSign";
import { Props } from "src/types/auth/login.types";
import { LogoView, SignMain, Header } from "../style";
import Logo from "src/assets/imgs/Signimg/signup.svg";
import * as S from "./style";
import SignupFirst from "./signupFirst";
import SignupSecond from "./signupSecond";
import { SIGNUP_SECTION_NAME } from "src/constants/signup/signup.constants";

const Signup = ({ setIsLogin }: Props) => {
  const { ...sign } = useSignup();

  const signupComponents: ReactNode[] = [
    <SignupFirst
      signupData={sign.signUpData}
      handleSignupData={sign.handleSigUpData}
      submitSignupDataFirst={sign.submitSignupDataFirst}
      keydownButton={sign.firstHandleKeyDown}
    />,
    <SignupSecond
      setSection={sign.setSection}
      signupData={sign.signUpData}
      handleSignupData={sign.handleSigUpData}
      submitSignupDataSecond={sign.submitSignupDataSecond}
      keydownButton={sign.firstHandleKeyDown}
    />,
  ];

  return (
    <>
      <SignMain>
        <Header>
          <span>소포가 처음이라면?</span>
        </Header>
        {signupComponents.map((component, idx) => {
          return sign.section === SIGNUP_SECTION_NAME[idx].title && component;
        })}
        <S.buttonBox>
          <span>
            계정이 있다면{" "}
            <strong onClick={() => setIsLogin(true)}>로그인</strong>
          </span>
        </S.buttonBox>
      </SignMain>

      <LogoView>
        <img src={Logo} alt="소포 많이 사랑해줘요" />
      </LogoView>
    </>
  );
};

export default Signup;
