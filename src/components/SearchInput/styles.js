import styled from "@emotion/styled";
import { COLORS, FONT_SIZES } from "../../constants/theme";

/**
 * Styled input component for search functionality
 */
export const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: ${COLORS.text};
  padding: 4px 8px;
  font-size: ${FONT_SIZES.medium};
  flex-grow: 1;
  font-family: "Titillium Web", sans-serif;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
