import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';

const ProductSkeleton = ({
  width = '100%',
  imageHeight = 180,
  titleLines = 2,
  priceWidth = '35%',
  spacing = 10,
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
    <View style={[styles.container, { width, gap: spacing }, style]}>
      <BoxSkeleton
        width="100%"
        height={imageHeight}
        borderRadius={12}
        {...animationProps}
      />

      <TextSkeleton
        lines={titleLines}
        lineHeight={14}
        spacing={6}
        {...animationProps}
      />

      <BoxSkeleton
        width={priceWidth}
        height={16}
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

export default ProductSkeleton;
