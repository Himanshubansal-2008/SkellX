import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleSkeleton from './CircleSkeleton';
import BoxSkeleton from './BoxSkeleton';
import { toSafeCount, isValidDimension } from '../utils/validateProps';

const NotificationSkeleton = ({
  avatarSize = 44,
  showTimestamp = true,
  showDescription = true,
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

  const isAvatarSizeValid = avatarSize === undefined || isValidDimension(avatarSize);
  if (!isAvatarSizeValid) {
    console.warn(
      `[SkellX] Invalid NotificationSkeleton avatarSize dimension "${avatarSize}". Defaulting to 44.`
    );
  }
  const safeAvatarSize = isAvatarSizeValid ? avatarSize : 44;

  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 12;

  return (
    <View style={[styles.container, { gap: safeSpacing }, style]}>
      <CircleSkeleton
        size={safeAvatarSize}
        {...animationProps}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <BoxSkeleton
            width="60%"
            height={12}
            borderRadius={4}
            {...animationProps}
          />

          {showTimestamp && (
            <BoxSkeleton
              width="20%"
              height={9}
              borderRadius={4}
              {...animationProps}
            />
          )}
        </View>

        {showDescription && (
          <View style={styles.description}>
            <BoxSkeleton
              width="90%"
              height={10}
              borderRadius={4}
              {...animationProps}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 9,
  },
});

export default NotificationSkeleton;
