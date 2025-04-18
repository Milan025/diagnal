import styled from "@emotion/styled";
import { COLORS, SPACING, FONT_SIZES } from "../../constants/theme";

/**
 * Container for the header component
 */
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${COLORS.background};
  padding: ${SPACING.medium};
  display: flex;
  align-items: center;
  gap: ${SPACING.medium};
  backdrop-filter: blur(10px);
  transition: box-shadow 0.3s ease;
  box-shadow: ${(props) =>
    props.isScrolled
      ? "0 12px 24px rgba(26, 26, 26, 1)"
      : "0 2px 8px rgba(26, 26, 26, 0.1)"};
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
