import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DEFAULT_SKELETON_COLOR } from '../constants/defaults';

const CircleSkeleton = ({
  size = 50,
  color = DEFAULT_SKELETON_COLOR,
  style,
}) => {
  return (
    <View
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
  },
});

export default CircleSkeleton;
