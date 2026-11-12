import React from 'react';
import { View, StyleSheet } from 'react-native';

import useTheme from '../hooks/useTheme';

const CircleSkeleton = ({
  size = 50,
  color,
  style,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color || theme.backgroundColor,
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
