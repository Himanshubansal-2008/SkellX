import React from 'react';
import BoxSkeleton from './BoxSkeleton';

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
  return (
    <BoxSkeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
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
