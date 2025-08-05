import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { showToast } from "src/libs/toast/swal";
import { useLoginMutation } from "src/queries/auth/queries";
import token from "src/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import { Login } from "src/types/auth/login.types";
import { useAtom } from "jotai";
import { tokenValidAtom } from "src/store/token/token.atom";
import { AxiosError } from "axios";
import errorHandler from "src/utils/error/errorHandler";

interface UseLoginReturn {
  loginData: Login;
  handleLoginDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleLogin: () => void;
  isLoading: boolean;
}

export const useLogin = (): UseLoginReturn => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<Login>({
    memberId: "",
    memberPassword: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginMutation = useLoginMutation();
  const [, setTokenValid] = useAtom(tokenValidAtom);

  const handleLoginDataChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      handleLogin();
    }
  }, []);

  const validateLoginData = (): boolean => {
    if (!loginData.memberId.trim()) {
      showToast("아이디를 입력해주세요", "INFO");
      return false;
    }

    if (!loginData.memberPassword.trim()) {
      showToast("비밀번호를 입력해주세요", "INFO");
      return false;
    }

    return true;
  };

  const handleLogin = useCallback(async (): Promise<void> => {
    if (!validateLoginData()) {
      return;
    }

    setIsLoading(true);

    try {
      loginMutation.mutate(loginData, {
        onSuccess: (data) => {
          setTokenValid(true);
          token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
          showToast("success", "로그인 성공");
          navigate("/");
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          const statusCode = axiosError.response?.status;
          const errorMessage = statusCode ? errorHandler.loginError(statusCode) : "로그인에 실패했습니다.";
          showToast("error", errorMessage);
          Sentry.captureException(`로그인 실패: ${error}`);
        },
        onSettled: () => {
          setIsLoading(false);
        },
      });
    } catch (error) {
      setIsLoading(false);
      showToast("error", "로그인 중 오류가 발생했습니다.");
      Sentry.captureException(`로그인 예외 발생: ${error}`);
    }
  }, [loginData, loginMutation, navigate, setTokenValid]);

  return {
    loginData,
    handleLoginDataChange,
    handleKeyDown,
    handleLogin,
    isLoading,
  };
};
