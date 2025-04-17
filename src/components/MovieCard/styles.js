import styled from "@emotion/styled";
import { COLORS, SPACING, FONT_SIZES } from "../../constants/theme";

export const Card = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  background-color: ${COLORS.cardBackground};
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
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

export const Fallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    145deg,
    ${COLORS.gradient.start},
    ${COLORS.gradient.end}
  );
  color: ${COLORS.textSecondary};
  padding: ${SPACING.large};
  text-align: center;
`;

export const FallbackIcon = styled.div`
  font-size: ${FONT_SIZES.xlarge};
  margin-bottom: ${SPACING.small};
  opacity: 0.8;
`;
