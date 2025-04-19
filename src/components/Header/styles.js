import styled from "@emotion/styled";
import { COLORS, SPACING } from "../../constants/theme";

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
  padding: ${SPACING.small};
  display: flex;
  align-items: center;
  gap: 0;
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
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  font-weight: 100;
  justify-content: center;
  width: 40px;
  height: 40px;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Remove any possible background */
  background: transparent !important;

  /* Remove any borders */
  border: none !important;
  outline: none !important;

  /* Remove touch callout */
  -webkit-touch-callout: none;

  /* Remove text selection */
  user-select: none;
  -webkit-user-select: none;

  /* Remove any focus styles */
  &:focus {
    outline: none !important;
    background: transparent !important;
  }

  &:active {
    outline: none !important;
    background: transparent !important;
  }

  &::-moz-focus-inner {
    border: 0 !important;
  }
`;

/**
 * Styled title component
 */
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 100;
  flex-grow: 1;
  padding: 4px 8px;
`;

/**
 * Styled button for search functionality
 */
export const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${COLORS.text};
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  font-weight: 100;
`;
