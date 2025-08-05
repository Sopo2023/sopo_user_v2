import React from "react";
import styled from "styled-components";
import { FallbackProps } from "react-error-boundary";
import color from "src/styles/color";

const ErrorFallback = ({ 
  error, 
  resetErrorBoundary 
}: FallbackProps) => {
  const handleRetry = () => {
    resetErrorBoundary();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <Container>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>오류가 발생했습니다</ErrorTitle>
      <ErrorComment>
        일시적인 문제가 발생했습니다. 다시 시도해주세요.
      </ErrorComment>
      {process.env.NODE_ENV === 'development' && (
        <ErrorDetails>
          <strong>개발자 정보:</strong>
          <pre>{error.message}</pre>
        </ErrorDetails>
      )}
      <ButtonGroup>
        <RetryButton onClick={handleRetry}>
          다시 시도
        </RetryButton>
        <HomeButton onClick={handleGoHome}>
          홈으로 이동
        </HomeButton>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  background-color: ${color.Background.Normal.Normal};
`;

const ErrorIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const ErrorTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${color.Primary.Heavy};
  margin: 0;
`;

const ErrorComment = styled.p`
  font-size: 16px;
  color: ${color.Label.Neutral};
  text-align: center;
  margin: 0;
  max-width: 400px;
`;

const ErrorDetails = styled.div`
  background-color: ${color.Background.Normal.Alternative};
  padding: 15px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  
  strong {
    color: ${color.Primary.Heavy};
    display: block;
    margin-bottom: 10px;
  }
  
  pre {
    font-size: 12px;
    color: ${color.Label.Neutral};
    white-space: pre-wrap;
    word-break: break-all;
    margin: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const RetryButton = styled(Button)`
  background-color: ${color.Primary.Normal};
  color: white;
  border: none;
  
  &:hover {
    background-color: ${color.Primary.Heavy};
  }
`;

const HomeButton = styled(Button)`
  background-color: transparent;
  color: ${color.Primary.Normal};
  border: 1px solid ${color.Primary.Normal};
  
  &:hover {
    background-color: ${color.Primary.Light};
  }
`;

export default ErrorFallback;