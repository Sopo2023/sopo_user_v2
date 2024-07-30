import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Description>없는 페이지</Description>
      <Button onClick={handleGoBack}>홈으로 돌아가</Button>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  position: absolute;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;

  cursor: pointer;
`;
