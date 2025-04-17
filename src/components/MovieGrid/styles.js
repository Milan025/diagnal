import styled from "@emotion/styled";
import { SPACING } from "../../constants/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${SPACING.medium};
  padding: ${SPACING.medium};
  max-width: 100%;
  margin: 0 auto;
`;

export const LoadingText = styled.div`
  color: white;
  text-align: center;
  padding: ${SPACING.large};
`;
