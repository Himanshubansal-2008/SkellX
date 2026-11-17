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
import { isValidDimension } from '../utils/validateProps';

const VALID_ANIMATIONS = Object.values(ANIMATION_TYPES);

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

  if (width !== undefined && !isValidDimension(width)) {
    console.warn(
      `[SkellX] Invalid width dimension "${width}". Expected a non-negative number, percentage string (e.g. "100%"), or "auto".`
    );
  }

  if (height !== undefined && !isValidDimension(height)) {
    console.warn(
      `[SkellX] Invalid height dimension "${height}". Expected a non-negative number, percentage string (e.g. "100%"), or "auto".`
    );
  }

  const baseStyle = {
    width,
    height,
    borderRadius,
    backgroundColor,
    overflow: 'hidden',
  };

  const resolvedAnimation = animation ?? DEFAULT_ANIMATION_TYPE;

  if (!VALID_ANIMATIONS.includes(resolvedAnimation)) {
    console.warn(
      `[SkellX] Invalid animation "${resolvedAnimation}". Expected one of: ${VALID_ANIMATIONS.join(
        ', '
      )}. Falling back to "${ANIMATION_TYPES.STATIC}".`
    );
    return <View style={[baseStyle, style]} />;
  }

  if (resolvedAnimation === ANIMATION_TYPES.STATIC) {
    return <View style={[baseStyle, style]} />;
  }

  if (resolvedAnimation === ANIMATION_TYPES.PULSE) {
    return (
      <Pulse
        duration={duration}
        minOpacity={minOpacity}
        maxOpacity={maxOpacity}
        style={[{ width, height }, style]}
      >
        <View style={baseStyle} />
      </Pulse>
    );
  }

  if (resolvedAnimation === ANIMATION_TYPES.SHIMMER) {
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
