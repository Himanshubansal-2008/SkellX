import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
} from 'react-native';

import useTheme from '../hooks/useTheme';
import { DEFAULT_ANIMATION_DURATION } from '../constants/defaults';
import { isValidDimension } from '../utils/validateProps';

const VALID_DIRECTIONS = ['left', 'right'];

const Shimmer = ({
  width = 200,
  height = 100,
  duration = DEFAULT_ANIMATION_DURATION,
  color,
  backgroundColor,
  opacity = 0.5,
  borderRadius = 8,
  direction = 'left',
  style,
}) => {
  const theme = useTheme();
  const resolvedBg = backgroundColor || theme.backgroundColor;
  const resolvedHighlight = color || theme.highlightColor;

  const isWidthValid = width === undefined || isValidDimension(width);
  if (!isWidthValid) {
    console.warn(
      `[SkellX] Invalid shimmer width dimension "${width}". Expected a non-negative number, percentage string (e.g. "100%"), or "auto". Defaulting to 200.`
    );
  }
  const resolvedWidth = isWidthValid ? width : 200;

  const isHeightValid = height === undefined || isValidDimension(height);
  if (!isHeightValid) {
    console.warn(
      `[SkellX] Invalid shimmer height dimension "${height}". Expected a non-negative number, percentage string (e.g. "100%"), or "auto". Defaulting to 100.`
    );
  }
  const resolvedHeight = isHeightValid ? height : 100;

  const isBorderRadiusValid =
    borderRadius === undefined ||
    (typeof borderRadius === 'number' && Number.isFinite(borderRadius) && borderRadius >= 0);
  if (!isBorderRadiusValid) {
    console.warn(
      `[SkellX] Invalid shimmer borderRadius "${borderRadius}". Expected a non-negative number. Defaulting to 8.`
    );
  }
  const resolvedBorderRadius = isBorderRadiusValid ? (borderRadius ?? 8) : 8;

  const isDirectionValid = direction === undefined || VALID_DIRECTIONS.includes(direction);
  if (!isDirectionValid) {
    console.warn(
      `[SkellX] Invalid shimmer direction "${direction}". Expected "left" or "right". Defaulting to "left".`
    );
  }
  const resolvedDirection = isDirectionValid ? (direction ?? 'left') : 'left';

  const isDurationValid =
    typeof duration === 'number' && Number.isFinite(duration) && duration > 0;
  if (!isDurationValid && duration !== undefined) {
    console.warn(
      `[SkellX] Invalid shimmer duration "${duration}". Expected a positive number. Using default (${DEFAULT_ANIMATION_DURATION}ms).`
    );
  }
  const resolvedDuration = isDurationValid ? duration : DEFAULT_ANIMATION_DURATION;

  const isOpacityValid =
    typeof opacity === 'number' && Number.isFinite(opacity) && opacity >= 0 && opacity <= 1;
  if (!isOpacityValid && opacity !== undefined) {
    console.warn(
      `[SkellX] Invalid shimmer opacity "${opacity}". Expected a number between 0 and 1. Defaulting to 0.5.`
    );
  }
  const resolvedOpacity = isOpacityValid ? opacity : 0.5;

  const animatedValue = useRef(new Animated.Value(0)).current;

  const [containerWidth, setContainerWidth] = useState(
    typeof resolvedWidth === 'number' && Number.isFinite(resolvedWidth) && resolvedWidth > 0
      ? resolvedWidth
      : 0
  );

  useEffect(() => {
    if (typeof resolvedWidth === 'number' && Number.isFinite(resolvedWidth) && resolvedWidth > 0) {
      setContainerWidth(resolvedWidth);
    }
  }, [resolvedWidth]);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: resolvedDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => animation.stop();
  }, [animatedValue, resolvedDuration]);

  const isRightToLeft = resolvedDirection === 'right';

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: isRightToLeft
      ? [containerWidth, -containerWidth]
      : [-containerWidth, containerWidth],
  });

  return (
    <View
      onLayout={({ nativeEvent }) => {
        const measuredWidth = nativeEvent.layout.width;
        setContainerWidth(current =>
          current === measuredWidth ? current : measuredWidth
        );
      }}
      style={[
        styles.container,
        {
          width: resolvedWidth,
          height: resolvedHeight,
          borderRadius: resolvedBorderRadius,
          backgroundColor: resolvedBg,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.highlight,
          {
            backgroundColor: resolvedHighlight,
            opacity: resolvedOpacity,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '40%',
  },
});

export default Shimmer;
