import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';

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

  return (
    <View style={[styles.container, { gap: spacing }, style]}>
      <BoxSkeleton
        width="100%"
        height={imageHeight}
        borderRadius={12}
        {...animationProps}
      />

      <TextSkeleton
        lines={titleLines}
        lineHeight={18}
        spacing={8}
        {...animationProps}
      />

      <TextSkeleton
        lines={contentLines}
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
