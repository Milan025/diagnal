import styled from "@emotion/styled";

export const SkeletonPulse = styled.div`
  display: inline-block;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 37%,
    rgba(255, 255, 255, 0.05) 63%
  );
  background-size: 400% 100%;
  animation: pulse 1.4s ease-in-out infinite;
  border-radius: ${(props) => props.borderRadius || "4px"};

  @keyframes pulse {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;
