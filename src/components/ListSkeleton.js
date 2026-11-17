import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleSkeleton from './CircleSkeleton';
import TextSkeleton from './TextSkeleton';
import { toSafeCount } from '../utils/validateProps';

const ListSkeleton = ({
  count = 4,
  avatarSize = 44,
  lines = 2,
  spacing = 8,
  itemSpacing = 16,
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

  const safeCount = toSafeCount(count, 4);
  const safeLines = toSafeCount(lines, 2);

  return (
    <View style={[styles.container, { gap: itemSpacing }, style]}>
      {Array.from({ length: safeCount }, (_, index) => (
        <View key={index} style={styles.item}>
          <CircleSkeleton
            size={avatarSize}
            {...animationProps}
          />

          <View style={styles.details}>
            <TextSkeleton
              lines={safeLines}
              spacing={spacing}
              {...animationProps}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  details: {
    flex: 1,
  },
});

export default ListSkeleton;
