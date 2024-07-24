import React, { useState, useCallback } from "react";
import { Sign } from "src/types/auth/signup.type";
import { showToast } from "src/libs/toast/swal";
import { useSignUpMutation } from "src/queries/auth/queries";

export const useSignup = () => {
  const SignUpMutation = useSignUpMutation();
  const [section, setSection] = useState("first");

  const [signUpData, setsignUpData] = useState<Sign>({
    id: "",
    password: "",
    checkPasswrod: "",
    name: "",
    email: "",
    checkNumber: "",
  });
  const handleSigUpData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
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
    const { id, password, checkPasswrod } = signUpData;

    if (id === "" || password === "" || checkPasswrod === "") {
      showToast("error", "양식이 비어있습니다");
      return;
    }
    if (password !== checkPasswrod) {
      showToast("error", "비밀번호가 다릅니다");
    }
    setSection("second");
  }, [signUpData]);

  const submitSignupDataSecond = useCallback(async () => {
    const { name, email, checkNumber } = signUpData;
    if (name === "" || email === "" || checkNumber === "") {
      showToast("error", "형식이 비어있습니다");
      return;
    }
    SignUpMutation.mutate(signUpData, {
      onSuccess: () => {
        window.location.reload();
      },
      onError: () => {
        showToast("error", "회원가입 실패");
      },
    });
  }, [signUpData]);

  return {
    section,
    setSection,
    signUpData,
    submitSignupDataSecond,
    handleSigUpData,
    firstHandleKeyDown,
    submitSignupDataFirst,
  };
};

export default useSignup;
