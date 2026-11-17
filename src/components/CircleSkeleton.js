import React from 'react';

import SkeletonItem from './SkeletonItem';

const CircleSkeleton = ({
  size = 50,
  borderRadius,
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
  const resolvedBorderRadius =
    borderRadius !== undefined
      ? borderRadius
      : typeof size === 'number' && Number.isFinite(size) && size >= 0
      ? size / 2
      : 9999;

  return (
    <SkeletonItem
      width={size}
      height={size}
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

export default CircleSkeleton;
