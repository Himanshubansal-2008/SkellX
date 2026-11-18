import React from 'react';

import SkeletonItem from './SkeletonItem';
import { isValidDimension } from '../utils/validateProps';

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
  const isSizeValid = size === undefined || isValidDimension(size);
  if (!isSizeValid) {
    console.warn(
      `[SkellX] Invalid CircleSkeleton size dimension "${size}". Expected a non-negative number, percentage string (e.g. "100%"), or "auto". Defaulting to 50.`
    );
  }
  const resolvedSize = isSizeValid ? size : 50;

  const resolvedBorderRadius =
    borderRadius !== undefined
      ? borderRadius
      : typeof resolvedSize === 'number' && Number.isFinite(resolvedSize) && resolvedSize >= 0
      ? resolvedSize / 2
      : 9999;

  return (
    <SkeletonItem
      width={resolvedSize}
      height={resolvedSize}
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
