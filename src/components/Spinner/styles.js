import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { COLORS } from "../../constants/theme";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const SpinnerAnimation = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${COLORS.background};
  border-top: 3px solid ${COLORS.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
