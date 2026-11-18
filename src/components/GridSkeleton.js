import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';
import { toSafeCount, toSafeColumns, isValidDimension } from '../utils/validateProps';

const GridSkeleton = ({
  count = 6,
  columns = 2,
  itemHeight = 120,
  spacing = 12,
  showText = true,
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

  const safeCount = toSafeCount(count, 6);
  const safeColumns = toSafeColumns(columns, 2);
  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 12;

  const isItemHeightValid = itemHeight === undefined || isValidDimension(itemHeight);
  if (!isItemHeightValid) {
    console.warn(
      `[SkellX] Invalid GridSkeleton itemHeight dimension "${itemHeight}". Defaulting to 120.`
    );
  }
  const safeItemHeight = isItemHeightValid ? itemHeight : 120;
  const itemWidth = `${100 / safeColumns}%`;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: safeCount }, (_, index) => (
        <View
          key={index}
          style={[
            styles.item,
            {
              width: itemWidth,
              paddingHorizontal: safeSpacing / 2,
              marginBottom: safeSpacing,
            },
          ]}
        >
          <BoxSkeleton
            width="100%"
            height={safeItemHeight}
            borderRadius={10}
            {...animationProps}
          />

          {showText && (
            <View style={styles.text}>
              <TextSkeleton
                lines={2}
                lineHeight={10}
                spacing={6}
                {...animationProps}
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    overflow: 'hidden',
  },
  text: {
    marginTop: 8,
  },
});

export default GridSkeleton;
