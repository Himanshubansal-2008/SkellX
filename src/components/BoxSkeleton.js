import React from 'react';

import SkeletonItem from './SkeletonItem';

const VALID_VARIANTS = ['rectangle', 'rounded', 'pill'];

const BoxSkeleton = ({
  width = '100%',
  height = 20,
  borderRadius,
  variant = 'rectangle',
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
  const variantRadius = {
    rectangle: 0,
    rounded: 8,
    pill: 999,
  };

  const isVariantValid = variant === undefined || VALID_VARIANTS.includes(variant);
  if (!isVariantValid) {
    console.warn(
      `[SkellX] Invalid BoxSkeleton variant "${variant}". Expected one of: ${VALID_VARIANTS.join(
        ', '
      )}. Defaulting to "rectangle".`
    );
  }

  const resolvedBorderRadius =
    borderRadius !== undefined
      ? borderRadius
      : variantRadius[variant] ?? variantRadius.rectangle;

  return (
    <SkeletonItem
      width={width}
      height={height}
      borderRadius={resolvedBorderRadius}
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

export default BoxSkeleton;
