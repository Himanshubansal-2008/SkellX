import React from 'react';

import SkeletonItem from './SkeletonItem';

const CircleSkeleton = ({
  size = 50,
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
  return (
    <SkeletonItem
      width={size}
      height={size}
      borderRadius={size / 2}
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
