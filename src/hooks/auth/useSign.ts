import React, { useState, useCallback } from "react";
import { Sign } from "src/types/auth/signup.type";
import { showToast } from "src/libs/toast/swal";
import { useSignUpMutation, useEmailNumber } from "src/queries/auth/queries";
import { AxiosError } from "axios";
import { SIGNUP_DATA } from "src/constants/signup/signup.constants";
import errorHandler from "src/utils/error/errorHandler";


export const useSignup = () => {
  const SignUpMutation = useSignUpMutation();
  const EmailMutation = useEmailNumber();
  const [section, setSection] = useState("first");

  const [signupData, setsignupData] = useState<Sign>(SIGNUP_DATA);

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target;
      setsignupData((prev) => ({
        ...prev,
        [name]: name === "authCode" ? value.toUpperCase() : value,
      }));
    },
    [] 
  );
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if(section === "first"){
        submitSignupDataFirst();
      }else if(section === "second"){
        submitSignupDataSecond();
      }else if(section === "third"){
        SubmitSignupDataThird();
      }
    }
  };

  const submitSignupDataFirst = useCallback(async () => {
    const { memberId, memberPassword, memberChckPassword } = signupData;

    if (memberId === ""  ) {
      showToast("error", "아이디가 비었습니다");
      return;
    }else if( memberPassword === ""){
      showToast("error", "비밀번호가 비었습니다");
      return;
    }else if(memberChckPassword === ""){
      showToast("error", "확인 비밀번호가 비었습니다");
      return;
    }
    if (memberPassword !== memberChckPassword) {
      showToast("error", "비밀번호가 다릅니다");
      return;
    }
    setSection("second");
  }, [signupData]);

  const [isWaiting, setIsWaiting] = useState<string>("");

  const checkEmailAuthCode = () => {
    setIsWaiting("전송중");
    const { memberEmail, memberSchool } = signupData;
    const domain = memberEmail.split("@")[1];
    if (memberEmail === "") {
      showToast("error", "이메일을 작성해주세요");
    } 
    // else if (
    //   domain !== "dgsw.hs.kr" &&
    //   memberSchool !== "대구소프트웨어마이스터고"
    // ) {
    //   showToast("error", "학교이메일이 다릅니다");
    //   setIsWaiting("전송실패");
    //   return;
    // } 
    // else if (
    //   domain !== "bssm.hs.kr" &&
    //   memberSchool !== "부산소프트웨어마이스터고"
    // ) {
    //   showToast("error", "학교이메일이 다릅니다");
    //   setIsWaiting("전송실패");
    //   return;
    // } else if (
    //   domain !== "gsm.gen.hs.kr" &&
    //   memberSchool !== "광주소프트웨어마이스터고"
    // ) {
    //   showToast("error", "학교이메일이 다릅니다");
    //   setIsWaiting("전송실패");
    //   return;
    // } else if (
    //   domain !== "dsmhs.djsch.kr" &&
    //   memberSchool !== "대덕소프트웨어마이스터고"
    // ) {
    //   showToast("error", "학교이메일이 다릅니다");
    //   setIsWaiting("전송실패");
    //   return;
    // }
    const email = memberEmail;
    EmailMutation.mutate(email, {
      onSuccess: () => {
        setTimeout(function() {
          setIsWaiting("전송성공");
         }, 3000);
        
      },
      onError: (error) => {
        setIsWaiting("");
        const errorCode = error as AxiosError;
        
        showToast("error", errorHandler.signEmailError(errorCode.response?.status!));
        
      },
    });
  };

  const emailKeydownButton = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkEmailAuthCode();
    }
  };

  const submitSignupDataSecond = useCallback(async () => {
    const { memberName, memberEmail, authCode, memberSchool } = signupData;
    if (
      memberName === "" 
    ) {
      showToast("error", "형식이 비어있습니다");
      return;
    }
    else if(   memberSchool === ""){
      showToast("error", "학교가 비었습니다");
      return;
    }
    setSection("third");
  
  }, [signupData]);

  const SubmitSignupDataThird = useCallback(async()=>{
    const {  memberEmail, authCode } = signupData;

    if(memberEmail === "" ){
      showToast("error", "이메일이 비었습니다");
      return;
    }
    else if(authCode === "" ){
      showToast("error", "인증코드가 비었습니다");
      return;
    }

    SignUpMutation.mutate(signupData, {
      onSuccess: () => {
        showToast("success", "회원가입 성공");
        window.location.reload();
      },
      onError: (error) => {
        const errorCode = error as AxiosError;
        showToast("error", errorHandler.signupError(errorCode.response?.status!));
      },
    });
  },[signupData])
  return {
    isWaiting,
    signupData,
    section,
    handleKeyDown,
    emailKeydownButton,
    checkEmailAuthCode,
    setSection,
    submitSignupDataSecond,
    handleSignupData,
    submitSignupDataFirst,
    SubmitSignupDataThird,
  };
};

export default useSignup;
