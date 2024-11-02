import { ReactNode } from "react";
import useSignup from "src/hooks/auth/useSign";
import { Props } from "src/types/auth/login.types";
import { LogoView, SignMain, Header } from "../style";
import Logo from "src/assets/imgs/Signimg/signup.svg";
import * as S from "./style";
import SignupFirst from "./signupFirst";
import SignupSecond from "./signupSecond";
import SignupThird from "./signupThrid";
import { SIGNUP_SECTION_NAME } from "src/constants/signup/signup.constants";

const Signup = ({ setIsLogin }: Props) => {
  const { ...sign } = useSignup();

  const signupComponents: ReactNode[] = [
    <SignupFirst
      signupData={sign.signupData}
      handleSignupData={sign.handleSignupData}
      submitSignupDataFirst={sign.submitSignupDataFirst}
      keydownButton={sign.handleKeyDown}
      key="signupFirst"
    />,
    <SignupSecond
      setSection={sign.setSection}
      signupData={sign.signupData}
      handleSignupData={sign.handleSignupData}
      submitSignupDataSecond={sign.submitSignupDataSecond}
      keydownButton={sign.handleKeyDown}
      key="signupSecond"
    />,
    <SignupThird
    setSection={sign.setSection}
    signupData={sign.signupData}
    handleSignupData={sign.handleSignupData}
    SubmitSignupDataThird={sign.SubmitSignupDataThird}
    keydownButton={sign.handleKeyDown}
    emailKeydownButton={sign.emailKeydownButton}
    chckEmailAuthCode={sign.checkEmailAuthCode}
    isWaiting={sign.isWaiting}
    key="signupthird"
    />
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
