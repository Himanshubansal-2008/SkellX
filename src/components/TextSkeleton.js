import React from 'react';
import { View, StyleSheet } from 'react-native';

import SkeletonItem from './SkeletonItem';
import { DEFAULT_BORDER_RADIUS } from '../constants/defaults';

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
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: lines }, (_, index) => (
        <SkeletonItem
          key={index}
          width={index === lines - 1 ? '75%' : width}
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
            marginBottom: index === lines - 1 ? 0 : spacing,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default TextSkeleton;
