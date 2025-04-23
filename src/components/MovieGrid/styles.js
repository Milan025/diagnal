import styled from "@emotion/styled";
import { SPACING, COLORS } from "../../constants/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${SPACING.large};
  padding: 56px 8px 8px 8px;

  /* Tablet view */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${SPACING.medium};
    padding: 56px 8px 8px 8px;
  }

  /* Mobile view - 3x3 grid */
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${SPACING.small};
    padding: 56px 8px 8px 8px;
  }

  /* Small mobile view */
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 56px 8px 8px 8px;
  }
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: ${SPACING.medium};
  color: ${COLORS.text};
`;
