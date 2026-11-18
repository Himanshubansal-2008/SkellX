import React from 'react';
import BoxSkeleton from './BoxSkeleton';
import { isValidDimension } from '../utils/validateProps';

const ButtonSkeleton = ({
  width = 140,
  height = 44,
  borderRadius = 8,
  color,
  animation,
  duration,
  direction,
  highlightColor,
  opacity,
  minOpacity,
  maxOpacity,
  style,
}) => {
  const isWidthValid = width === undefined || isValidDimension(width);
  if (!isWidthValid) {
    console.warn(
      `[SkellX] Invalid ButtonSkeleton width dimension "${width}". Defaulting to 140.`
    );
  }
  const safeWidth = isWidthValid ? width : 140;

  const isHeightValid = height === undefined || isValidDimension(height);
  if (!isHeightValid) {
    console.warn(
      `[SkellX] Invalid ButtonSkeleton height dimension "${height}". Defaulting to 44.`
    );
  }
  const safeHeight = isHeightValid ? height : 44;

  const isBorderRadiusValid =
    borderRadius === undefined ||
    (typeof borderRadius === 'number' && Number.isFinite(borderRadius) && borderRadius >= 0);
  if (!isBorderRadiusValid) {
    console.warn(
      `[SkellX] Invalid ButtonSkeleton borderRadius "${borderRadius}". Defaulting to 8.`
    );
  }
  const safeBorderRadius = isBorderRadiusValid ? (borderRadius ?? 8) : 8;

  return (
    <BoxSkeleton
      width={safeWidth}
      height={safeHeight}
      borderRadius={safeBorderRadius}
      color={color}
      animation={animation}
      duration={duration}
      direction={direction}
      highlightColor={highlightColor}
      opacity={opacity}
      minOpacity={minOpacity}
      maxOpacity={maxOpacity}
      style={style}
    />
  );
};

export default ButtonSkeleton;
