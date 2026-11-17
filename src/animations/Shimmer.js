import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
} from 'react-native';

import useTheme from '../hooks/useTheme';
import { DEFAULT_ANIMATION_DURATION } from '../constants/defaults';

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
    typeof width === 'number' && Number.isFinite(width) && width > 0 ? width : 0
  );

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
          width,
          height,
          borderRadius,
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
