import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleSkeleton from './CircleSkeleton';
import BoxSkeleton from './BoxSkeleton';
import { toSafeCount } from '../utils/validateProps';

const ProfileSkeleton = ({
  avatarSize = 48,
  nameWidth = '60%',
  subtitleWidth = '40%',
  spacing = 8,
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

  const safeAvatarSize = toSafeCount(avatarSize, 48);
  const safeSpacing = toSafeCount(spacing, 8);

  return (
    <View style={[styles.container, style]}>
      <CircleSkeleton
        size={safeAvatarSize}
        {...animationProps}
      />

      <View style={[styles.details, { gap: safeSpacing }]}>
        <BoxSkeleton
          width={nameWidth}
          height={14}
          borderRadius={4}
          {...animationProps}
        />
        <BoxSkeleton
          width={subtitleWidth}
          height={10}
          borderRadius={4}
          {...animationProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  details: {
    flex: 1,
  },
});

export default ProfileSkeleton;
