import React from 'react';

import SkeletonItem from './SkeletonItem';

const CircleSkeleton = ({
  size = 50,
  color,
  animation,
  duration,
  style,
}) => {
  return (
    <SkeletonItem
      width={size}
      height={size}
      color={color}
      borderRadius={size / 2}
      animation={animation}
      duration={duration}
      style={style}
    />
  );
};

export default CircleSkeleton;
