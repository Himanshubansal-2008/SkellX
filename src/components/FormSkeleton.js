import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';

const FormSkeleton = ({
  fields = 3,
  inputHeight = 44,
  spacing = 18,
  showLabels = true,
  labelWidth = '35%',
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
      {Array.from({ length: fields }, (_, index) => (
        <View key={index} style={{ marginBottom: spacing }}>
          {showLabels && (
            <BoxSkeleton
              width={labelWidth}
              height={10}
              borderRadius={4}
              {...animationProps}
              style={styles.label}
            />
          )}

          <BoxSkeleton
            width="100%"
            height={inputHeight}
            borderRadius={8}
            {...animationProps}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 9,
  },
});

export default FormSkeleton;
