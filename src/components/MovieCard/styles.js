import styled from "@emotion/styled";
import { COLORS, SPACING, FONT_SIZES } from "../../constants/theme";

export const Card = styled.div`
  position: relative;
  width: 100%;
  background: #1a1a1a;
  border-radius: 0px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%; /* 2:3 aspect ratio */

  @media (max-width: 768px) {
    padding-top: 140%; /* Slightly shorter aspect ratio for mobile */
  }
`;

export const MovieImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease;
  border-radius: 2px;
  overflow: hidden;
`;

export const MovieTitle = styled.h3`
  padding: ${SPACING.small};
  margin: 0;
  font-size: ${FONT_SIZES.small};
  font-weight: 100;
  color: ${COLORS.text};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: ${FONT_SIZES.xsmall};
    padding: 8px 4px 8px 0;
  }
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${SPACING.small};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  font-size: ${FONT_SIZES.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
