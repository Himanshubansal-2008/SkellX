import React from 'react';

import SkeletonItem from './SkeletonItem';
import { DEFAULT_BORDER_RADIUS } from '../constants/defaults';

const BoxSkeleton = ({
  width = '100%',
  height = 100,
  color,
  borderRadius = DEFAULT_BORDER_RADIUS,
  animation,
  duration,
  direction,
  highlightColor,
  opacity,
  minOpacity,
  maxOpacity,
  style,
}) => {
  return (
    <SkeletonItem
      width={width}
      height={height}
      color={color}
      borderRadius={borderRadius}
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
