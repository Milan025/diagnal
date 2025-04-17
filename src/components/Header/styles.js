import styled from "@emotion/styled";
import { COLORS, SPACING, FONT_SIZES } from "../../constants/theme";

/**
 * Container for the header component
 */
export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${COLORS.background};
  padding: ${SPACING.medium};
  display: flex;
  align-items: center;
  gap: ${SPACING.medium};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

/**
 * Styled button for back navigation
 */
export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${COLORS.text};
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
`;

/**
 * Styled title component
 */
export const Title = styled.h1`
  font-size: ${FONT_SIZES.large};
  font-weight: 600;
  flex-grow: 1;
`;

/**
 * Styled button for search functionality
 */
export const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${COLORS.text};
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
`;
