import React, { useState, useCallback } from "react";
import { Sign } from "src/types/auth/signup.type";
import { showToast } from "src/libs/toast/swal";
import { useSignUpMutation,useEmailNumber } from "src/queries/auth/queries";

export const useSignup = () => {
  const SignUpMutation = useSignUpMutation();
  const EmailMutation = useEmailNumber();
  const [section, setSection] = useState("first");

  const [signUpData, setsignUpData] = useState<Sign>({
    memberId: "",
    memberPassword: "",
    memberChckPassword: "",
    memberName: "",
    memberEmail: "",
    memberSchool:"",
    authCode: "",
    memberFcmToken:"",
  });
  
  const handleSigUpData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>): void => {
      const { name, value } = e.target;
      setsignUpData((prev) => ({ ...prev, [name]: value }));
    },
    [signUpData]
  );

  const firstHandleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitSignupDataFirst();
    }
  };
  const submitSignupDataFirst = useCallback(async () => {
    const { memberId, memberPassword, memberChckPassword } = signUpData;

    if (memberId === "" || memberPassword === "" || memberChckPassword === "") {
      showToast("error", "양식이 비어있습니다");
      return;
    }
    if (memberPassword !== memberChckPassword) {
      showToast("error", "비밀번호가 다릅니다");
    }
    setSection("second");
  }, [signUpData]);
const [isWaiting, setIsWaiting]=useState(false);
  const checkEmailAuthCode = ()=>{
    setIsWaiting(true) 
    const {  memberEmail,memberSchool } = signUpData;
    const domain = memberEmail.split('@')[1];
    if(memberEmail=== ""){
      showToast("error","이메일을 작성해주세요");
    }
    else if(domain !== "dgsw.hs.kr" && memberSchool !=="대구소프트웨어마이스터고"){
      showToast("error","학교이메일이 다릅니다")
    }
    const emailData = {
      email:memberEmail
    }
    
    EmailMutation.mutate(emailData,{
      onSuccess:()=>{
        showToast("success","이메일 인증번호 발송")
        setIsWaiting(false) 
      },
      onError:()=>{
        showToast("error","인증번호 실패")
        setIsWaiting(false) 
      }
    })

  }
  const submitSignupDataSecond = useCallback(async () => {
    const { memberName, memberEmail, authCode,memberSchool } = signUpData;
    if (memberName === "" || memberEmail === "" || authCode === "" || memberSchool==="") {
      showToast("error", "형식이 비어있습니다");
      return;
    }
    
    SignUpMutation.mutate(signUpData, {
      onSuccess: () => {
        showToast("success","회원가입 성공")
        window.location.reload();
      },
      onError: () => {
        showToast("error", "회원가입 실패");
      },
    });
  }, [signUpData]);

  return {
    isWaiting,
    signUpData,
    section,
    checkEmailAuthCode,
    setSection,
    submitSignupDataSecond,
    handleSigUpData,
    firstHandleKeyDown,
    submitSignupDataFirst,
  };
};

export default useSignup;
