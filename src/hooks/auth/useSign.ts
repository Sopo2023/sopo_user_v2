import React, { useState, useCallback } from "react";
import { Sign } from "src/types/auth/signup.type";
import { showToast } from "src/libs/toast/swal";
import { useSignUpMutation, useEmailNumber } from "src/queries/auth/queries";
import { AxiosError } from "axios";

export const useSignup = () => {
  const SignUpMutation = useSignUpMutation();
  const EmailMutation = useEmailNumber();
  const [section, setSection] = useState("first");

  const [signupData, setsignupData] = useState<Sign>({
    memberId: "",
    memberPassword: "",
    memberChckPassword: "",
    memberName: "",
    memberEmail: "",
    memberSchool: "",
    authCode: "",
    memberFcmToken: "",
  });

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target;
      
      setsignupData((prev) => ({ ...prev, [name]: value }));
      
    },
    [signupData]
  );

  const firstHandleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitSignupDataFirst();
    }
  };
  const secondHandleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitSignupDataSecond();
    }
  };
  const submitSignupDataFirst = useCallback(async () => {
    const { memberId, memberPassword, memberChckPassword } = signupData;

    if (memberId === "" || memberPassword === "" || memberChckPassword === "") {
      showToast("error", "양식이 비어있습니다");
      return;
    }
    if (memberPassword !== memberChckPassword) {
      showToast("error", "비밀번호가 다릅니다");
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
    } else if (
      domain !== "dgsw.hs.kr" &&
      memberSchool !== "대구소프트웨어마이스터고"
    ) {
      showToast("error", "학교이메일이 다릅니다");
      setIsWaiting("전송실패");
      return;
    } 
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
        setIsWaiting("전송성공");
      },
      onError: () => {
        setIsWaiting("");
        showToast("error", "인증번호 실패");
        
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
      memberName === "" ||
      memberEmail === "" ||
      authCode === "" ||
      memberSchool === ""
    ) {
      showToast("error", "형식이 비어있습니다");
      return;
    }

    SignUpMutation.mutate(signupData, {
      onSuccess: () => {
        showToast("success", "회원가입 성공");
        window.location.reload();
      },
      onError: () => {
        showToast("error", "회원가입 실패");
      },
    });
  }, [signupData]);

  return {
    isWaiting,
    signupData,
    section,
    emailKeydownButton,
    secondHandleKeyDown,
    checkEmailAuthCode,
    setSection,
    submitSignupDataSecond,
    handleSignupData,
    firstHandleKeyDown,
    submitSignupDataFirst,
  };
};

export default useSignup;
