import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DEFAULT_BORDER_RADIUS } from '../constants/defaults';
import useTheme from '../hooks/useTheme';

const BoxSkeleton = ({
  width = '100%',
  height = 100,
  color,
  borderRadius = DEFAULT_BORDER_RADIUS,
  style,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.skeleton,
        {
          width,
          height,
          backgroundColor: color || theme.backgroundColor,
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
