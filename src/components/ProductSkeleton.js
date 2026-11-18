import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';
import { toSafeCount, isValidDimension } from '../utils/validateProps';

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

  const isWidthValid = width === undefined || isValidDimension(width);
  if (!isWidthValid) {
    console.warn(
      `[SkellX] Invalid ProductSkeleton width dimension "${width}". Defaulting to "100%".`
    );
  }
  const safeWidth = isWidthValid ? width : '100%';

  const isImageHeightValid = imageHeight === undefined || isValidDimension(imageHeight);
  if (!isImageHeightValid) {
    console.warn(
      `[SkellX] Invalid ProductSkeleton imageHeight dimension "${imageHeight}". Defaulting to 180.`
    );
  }
  const safeImageHeight = isImageHeightValid ? imageHeight : 180;

  const isPriceWidthValid = priceWidth === undefined || isValidDimension(priceWidth);
  if (!isPriceWidthValid) {
    console.warn(
      `[SkellX] Invalid ProductSkeleton priceWidth dimension "${priceWidth}". Defaulting to "35%".`
    );
  }
  const safePriceWidth = isPriceWidthValid ? priceWidth : '35%';

  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 10;

  return (
    <View style={[styles.container, { width: safeWidth, gap: safeSpacing }, style]}>
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
        width={safePriceWidth}
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
