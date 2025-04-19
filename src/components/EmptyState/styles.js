import styled from "@emotion/styled";
import { COLORS } from "../../constants/theme";

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px 32px 32px;
  text-align: center;
  min-height: 100vh;
  background-color: ${COLORS.background};
`;

export const Icon = styled.div`
  font-size: 56px;
  color: ${COLORS.primary};
  opacity: 0.7;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: ${COLORS.text};
  font-weight: 100;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${COLORS.textSecondary};
  max-width: 400px;
  line-height: 1.5;
  font-weight: 100;
`;
