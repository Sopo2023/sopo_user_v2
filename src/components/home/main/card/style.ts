import styled from "styled-components";

export const CardContainer = styled.div`
  perspective: 1000px;
`;

export const Card = styled.div`
  width: 200px;
  height: 100px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;

  &.is-flipped {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &.card-front {
    background-color: #ffcc00;
  }

  &.card-back {
    background-color: #ff3300;
    transform: rotateY(180deg);
  }
`;
