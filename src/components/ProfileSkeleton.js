import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleSkeleton from './CircleSkeleton';
import BoxSkeleton from './BoxSkeleton';

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

  return (
    <View style={[styles.container, style]}>
      <CircleSkeleton
        size={avatarSize}
        {...animationProps}
      />

      <View style={[styles.details, { gap: spacing }]}>
        <BoxSkeleton
          width={nameWidth}
          height={14}
          {...animationProps}
        />
        <BoxSkeleton
          width={subtitleWidth}
          height={10}
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
