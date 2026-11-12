import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonGroup = ({
  children,
  direction = 'column',
  spacing = 12,
  align = 'stretch',
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: direction === 'row' ? 'row' : 'column',
          gap: spacing,
          alignItems: align,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default SkeletonGroup;
