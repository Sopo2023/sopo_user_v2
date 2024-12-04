import styled,{ keyframes } from "styled-components";

const skeleton = keyframes`
    0% {
      background-color: rgba(182, 182, 182, 0.1);
    }
    50% {
      background-color: rgba(182, 182, 182, 0.25);
    }
    100% {
      background-color: rgba(182, 182, 182, 0.1);
    }
`;

export const BusSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 14px;
`;

export const BusSkeletonItem = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  animation: ${skeleton} 1s infinite ease-in-out;
`;