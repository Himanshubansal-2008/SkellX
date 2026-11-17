import React from 'react';
import { View, StyleSheet } from 'react-native';

import SkeletonItem from './SkeletonItem';
import { DEFAULT_BORDER_RADIUS } from '../constants/defaults';
import { toSafeCount } from '../utils/validateProps';

const TextSkeleton = ({
  width = '100%',
  lines = 2,
  lineHeight = 12,
  spacing = 8,
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
  const resolvedLines = toSafeCount(lines, 2);

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: resolvedLines }, (_, index) => {
        const isLastLine = index === resolvedLines - 1;
        const lineWidth =
          resolvedLines > 1 && isLastLine
            ? typeof width === 'number'
              ? width * 0.75
              : '75%'
            : width;

        return (
          <SkeletonItem
            key={index}
            width={lineWidth}
            height={lineHeight}
            color={color}
            borderRadius={borderRadius}
            animation={animation}
            duration={duration}
            direction={direction}
            highlightColor={highlightColor}
            opacity={opacity}
            minOpacity={minOpacity}
            maxOpacity={maxOpacity}
            style={{
              marginBottom: isLastLine ? 0 : spacing,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default TextSkeleton;
