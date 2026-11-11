import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
  DEFAULT_SKELETON_COLOR,
  DEFAULT_BORDER_RADIUS,
} from '../constants/defaults';

const TextSkeleton = ({
  width = '100%',
  lines = 2,
  lineHeight = 12,
  spacing = 8,
  color = DEFAULT_SKELETON_COLOR,
  borderRadius = DEFAULT_BORDER_RADIUS,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: lines }, (_, index) => (
        <View
          key={index}
          style={{
            width: index === lines - 1 ? '75%' : width,
            height: lineHeight,
            marginBottom: index === lines - 1 ? 0 : spacing,
            backgroundColor: color,
            borderRadius,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default TextSkeleton;
