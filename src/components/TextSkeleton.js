import React from 'react';
import { View, StyleSheet } from 'react-native';

import SkeletonItem from './SkeletonItem';
import { DEFAULT_BORDER_RADIUS } from '../constants/defaults';
import { toSafeCount, isValidDimension } from '../utils/validateProps';

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

  const isWidthValid = width === undefined || isValidDimension(width);
  if (!isWidthValid) {
    console.warn(
      `[SkellX] Invalid TextSkeleton width dimension "${width}". Defaulting to "100%".`
    );
  }
  const safeWidth = isWidthValid ? width : '100%';

  const isLineHeightValid = lineHeight === undefined || isValidDimension(lineHeight);
  if (!isLineHeightValid) {
    console.warn(
      `[SkellX] Invalid TextSkeleton lineHeight dimension "${lineHeight}". Defaulting to 12.`
    );
  }
  const safeLineHeight = isLineHeightValid ? lineHeight : 12;

  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 8;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: resolvedLines }, (_, index) => {
        const isLastLine = index === resolvedLines - 1;
        const lineWidth =
          resolvedLines > 1 && isLastLine
            ? typeof safeWidth === 'number'
              ? safeWidth * 0.75
              : '75%'
            : safeWidth;

        return (
          <SkeletonItem
            key={index}
            width={lineWidth}
            height={safeLineHeight}
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
              marginBottom: isLastLine ? 0 : safeSpacing,
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
