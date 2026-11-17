import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonGroup = ({
  children,
  direction = 'column',
  spacing = 12,
  align = 'stretch',
  style,
}) => {
  const isSpacingValid =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0;
  const resolvedSpacing = isSpacingValid ? spacing : 12;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: direction === 'row' ? 'row' : 'column',
          gap: resolvedSpacing,
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
