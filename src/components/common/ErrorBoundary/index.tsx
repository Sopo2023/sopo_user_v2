import styled from "styled-components";
import { FallbackProps } from "react-error-boundary";
import color from "@src/styles/color";
const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <ErrorComment>오류가 발생했습니다.</ErrorComment>
      <RefetchButton onClick={() => resetErrorBoundary()}>
        다시 시도
      </RefetchButton>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
`;

export const ErrorComment = styled.p`
  font-size: 14px;
  color: black;
`;

export const RefetchButton = styled.button`
  width: 80px;
  height: 26px;
  border: 1px solid black;
  background-color: ${color.Background.Normal};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${color.Primary.Light};
`;

export default ErrorFallback;