import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import CircleSkeleton from './CircleSkeleton';
import TextSkeleton from './TextSkeleton';

const CardSkeleton = ({
  width = '100%',
  imageHeight = 150,
  avatarSize = 40,
  lines = 2,
  spacing = 12,
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
    animation,
    duration,
    direction,
    highlightColor,
    opacity,
    minOpacity,
    maxOpacity,
  };

  return (
    <View style={[styles.card, { width }, style]}>
      <BoxSkeleton
        width="100%"
        height={imageHeight}
        borderRadius={12}
        {...animationProps}
      />

      <View style={styles.content}>
        <View style={styles.profile}>
          <CircleSkeleton
            size={avatarSize}
            {...animationProps}
          />

          <View style={styles.text}>
            <TextSkeleton
              lines={2}
              lineHeight={10}
              {...animationProps}
            />
          </View>
        </View>

        <TextSkeleton
          lines={lines}
          lineHeight={12}
          spacing={spacing}
          {...animationProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
  },
  content: {
    marginTop: 12,
    gap: 12,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    flex: 1,
  },
});

export default CardSkeleton;
