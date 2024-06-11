import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/libs/toast/swal";
import { useLoginMutation } from "src/queries/auth/queries";
import token from "src/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태
  const LoginMutation = useLoginMutation();
  const handleLogin = async () => {
    if (email === "" || password === "") {
      showToast("warning", "이메일과 비밀번호를 모두 입력해주세요");
      return;
    }
    LoginMutation.mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: (data) => {
          navigate("/");
          showToast("success", "로그인 성공");
          token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
        },
        onError: () => {
          showToast("error", "로그인 실패");
        },
      }
    );
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일 유효성 검사
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const isValidEmail = emailRegex.test(newEmail);

    const isKoreanInput = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    if (isKoreanInput.test(newEmail)) {
      // 한글 입력이 감지되면 공백으로 치환
      const filteredEmail = newEmail.replace(isKoreanInput, "");
      setEmail(filteredEmail);
    } else if (!isValidEmail) {
    }
    const specialCharRegex = /[^a-zA-Z0-9@.]/;
    if (specialCharRegex.test(newEmail)) {
      // 특수문자가 감지되면 해당 문자를 공백으로 치환
      const filteredEmail = newEmail
        .replace(specialCharRegex, " ")
        .replace(/\s/g, "");
      setEmail(filteredEmail);
    } else if (!isValidEmail) {
      // 유효하지 않은 이메일 형식이면 에러 처리
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(newPassword);

    if (!isValidPassword) {
      // 유효하지 않은 비밀번호 형식이면 에러 처리
    }
  };
  const handleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    onChangeEmail,
    onChangePassword,
    keepLoggedIn,
    handleKeepLoggedIn,
    handleLogin,
  };
};
