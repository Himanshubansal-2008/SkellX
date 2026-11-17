import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleSkeleton from './CircleSkeleton';
import BoxSkeleton from './BoxSkeleton';
import { toSafeCount } from '../utils/validateProps';

const CommentSkeleton = ({
  avatarSize = 40,
  lines = 2,
  showAvatar = true,
  showTimestamp = true,
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

  const safeLines = toSafeCount(lines, 2);
  const safeAvatarSize = toSafeCount(avatarSize, 40);
  const safeSpacing = toSafeCount(spacing, 12);

  return (
    <View style={[styles.container, { gap: safeSpacing }, style]}>
      {showAvatar && (
        <CircleSkeleton
          size={safeAvatarSize}
          {...animationProps}
        />
      )}

      <View style={styles.content}>
        <View style={styles.header}>
          <BoxSkeleton
            width={110}
            height={12}
            borderRadius={4}
            {...animationProps}
          />

          {showTimestamp && (
            <BoxSkeleton
              width={55}
              height={9}
              borderRadius={4}
              {...animationProps}
            />
          )}
        </View>

        <View style={styles.description}>
          {Array.from({ length: safeLines }, (_, index) => (
            <BoxSkeleton
              key={index}
              width={index === safeLines - 1 ? '65%' : '100%'}
              height={10}
              borderRadius={4}
              style={index > 0 ? styles.line : undefined}
              {...animationProps}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 10,
  },
  line: {
    marginTop: 7,
  },
});

export default CommentSkeleton;
