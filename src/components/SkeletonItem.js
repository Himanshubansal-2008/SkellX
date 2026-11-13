import React from 'react';
import { View } from 'react-native';

import Shimmer from '../animations/Shimmer';
import Pulse from '../animations/Pulse';
import useTheme from '../hooks/useTheme';

import { ANIMATION_TYPES } from '../constants/animations';
import {
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_ANIMATION_TYPE,
  DEFAULT_BORDER_RADIUS,
} from '../constants/defaults';

const SkeletonItem = ({
  width,
  height,
  color,
  borderRadius = DEFAULT_BORDER_RADIUS,
  animation = DEFAULT_ANIMATION_TYPE,
  duration = DEFAULT_ANIMATION_DURATION,
  direction = 'left',
  highlightColor,
  opacity = 0.5,
  minOpacity = 0.4,
  maxOpacity = 1,
  style,
}) => {
  const theme = useTheme();
  const backgroundColor = color || theme.backgroundColor;

  const baseStyle = {
    width,
    height,
    borderRadius,
    backgroundColor,
    overflow: 'hidden',
  };

  if (animation === ANIMATION_TYPES.STATIC) {
    return <View style={[baseStyle, style]} />;
  }

  if (animation === ANIMATION_TYPES.PULSE) {
    return (
      <Pulse
        duration={duration}
        minOpacity={minOpacity}
        maxOpacity={maxOpacity}
        style={style}
      >
        <View style={baseStyle} />
      </Pulse>
    );
  }

  if (animation === ANIMATION_TYPES.SHIMMER) {
    return (
      <Shimmer
        width={width}
        height={height}
        duration={duration}
        color={highlightColor || theme.highlightColor}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        direction={direction}
        opacity={opacity}
        style={style}
      />
    );
  }

  return <View style={[baseStyle, style]} />;
};

export default SkeletonItem;
