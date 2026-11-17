import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import TextSkeleton from './TextSkeleton';
import { toSafeCount, toSafeColumns } from '../utils/validateProps';

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
              paddingHorizontal: spacing / 2,
              marginBottom: spacing,
            },
          ]}
        >
          <BoxSkeleton
            width="100%"
            height={itemHeight}
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
