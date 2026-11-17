import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';
import { toSafeCount } from '../utils/validateProps';

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

  const safeTitleLines = toSafeCount(titleLines, 2);
  const safeImageHeight = toSafeCount(imageHeight, 180);
  const safeSpacing = toSafeCount(spacing, 10);

  return (
    <View style={[styles.container, { width, gap: safeSpacing }, style]}>
      <BoxSkeleton
        width="100%"
        height={safeImageHeight}
        borderRadius={12}
        {...animationProps}
      />

      <TextSkeleton
        lines={safeTitleLines}
        lineHeight={14}
        spacing={6}
        {...animationProps}
      />

      <BoxSkeleton
        width={priceWidth}
        height={16}
        borderRadius={4}
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
