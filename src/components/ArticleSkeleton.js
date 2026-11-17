import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';
import { toSafeCount } from '../utils/validateProps';

const ArticleSkeleton = ({
  imageHeight = 200,
  titleLines = 2,
  contentLines = 4,
  spacing = 12,
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
  const animationProps = {
    color,
    animation,
    duration,
    direction,
    highlightColor,
    opacity,
    minOpacity,
    maxOpacity,
  };

  const safeTitleLines = toSafeCount(titleLines, 2);
  const safeContentLines = toSafeCount(contentLines, 4);
  const safeImageHeight = toSafeCount(imageHeight, 200);
  const safeSpacing = toSafeCount(spacing, 12);

  return (
    <View style={[styles.container, { gap: safeSpacing }, style]}>
      <BoxSkeleton
        width="100%"
        height={safeImageHeight}
        borderRadius={12}
        {...animationProps}
      />

      <TextSkeleton
        lines={safeTitleLines}
        lineHeight={18}
        spacing={8}
        {...animationProps}
      />

      <TextSkeleton
        lines={safeContentLines}
        lineHeight={12}
        spacing={8}
        {...animationProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default ArticleSkeleton;
