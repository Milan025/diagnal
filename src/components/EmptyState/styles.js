import styled from "@emotion/styled";
import { COLORS, SPACING, FONT_SIZES } from "../../constants/theme";

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${SPACING.xlarge};
  text-align: center;
  min-height: calc(100vh - 80px);
  background-color: ${COLORS.background};
`;

export const Icon = styled.div`
  font-size: 64px;
  color: ${COLORS.primary};
  margin-bottom: ${SPACING.medium};
  opacity: 0.7;
`;

export const Title = styled.h2`
  font-size: ${FONT_SIZES.large};
  color: ${COLORS.text};
  margin-bottom: ${SPACING.small};
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: ${FONT_SIZES.medium};
  color: ${COLORS.textSecondary};
  max-width: 400px;
  line-height: 1.5;
`;
