import React from "react";
import { SkeletonPulse } from "./styles";

export const Skeleton = ({ width, height, borderRadius, style }) => (
  <SkeletonPulse
    width={width}
    height={height}
    borderRadius={borderRadius}
    style={style}
  />
);
