import React, {FormEvent, useState } from "react";
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
  
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태
  const LoginMutation = useLoginMutation();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    if (id === "" || password === "") {
      showToast("warning", "아이디와 비밀번호를 모두 입력해주세요");
      return;
    }
    LoginMutation.mutate(
      {
        id: id,
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

  return {
    handleKeyDown,
    loading,
    id,
    setId,
    password,
    setPassword,
    keepLoggedIn,
    handleLogin,
  };
};
