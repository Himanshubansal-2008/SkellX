import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
  DEFAULT_SKELETON_COLOR,
  DEFAULT_BORDER_RADIUS,
} from '../constants/defaults';

const BoxSkeleton = ({
  width = '100%',
  height = 100,
  color = DEFAULT_SKELETON_COLOR,
  borderRadius = DEFAULT_BORDER_RADIUS,
  style,
}) => {
  return (
    <View
      style={[
        styles.skeleton,
        {
          width,
          height,
          backgroundColor: color,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    overflow: 'hidden',
  },
});

export default BoxSkeleton;
