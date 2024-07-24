import React, {FormEvent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/libs/toast/swal";
import { useLoginMutation } from "src/queries/auth/queries";
import token from "src/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import {Login} from "src/types/auth/login.types"

export const useLogin = () => {
  const navigate = useNavigate();
  const [LoginData, setLoginData] = useState<Login>({
    id: "",
    password:"",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태
  const LoginMutation = useLoginMutation();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleSigUpData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const {  name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [LoginData]
  );

  

  const handleLogin = async () => {
    if (LoginData.id === "") {
      showToast("아이디를 입력해주세요", "INFO");
      return;
    }

    if (LoginData.password === "") {
      showToast("비밀번호를 입력해주세요", "INFO");
      return;
    }
    LoginMutation.mutate(
     LoginData,
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
    LoginData,
    handleSigUpData,
    handleKeyDown,
    loading,
    keepLoggedIn,
    handleLogin,
  };
};
