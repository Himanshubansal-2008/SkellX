import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';

const EmptyStateSkeleton = ({
  illustrationSize = 120,
  showAction = true,
  descriptionLines = 2,
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
      <BoxSkeleton
        width={illustrationSize}
        height={illustrationSize}
        borderRadius={16}
        {...animationProps}
      />

      <BoxSkeleton
        width="60%"
        height={18}
        borderRadius={5}
        style={styles.heading}
        {...animationProps}
      />

      <View style={styles.description}>
        {Array.from(
          { length: Math.max(0, descriptionLines) },
          (_, index) => (
            <BoxSkeleton
              key={index}
              width={index === descriptionLines - 1 ? '55%' : '85%'}
              height={11}
              borderRadius={4}
              style={index > 0 ? styles.descriptionLine : undefined}
              {...animationProps}
            />
          )
        )}
      </View>

      {showAction && (
        <BoxSkeleton
          width={130}
          height={42}
          borderRadius={8}
          style={styles.action}
          {...animationProps}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 24,
  },
  heading: {
    marginTop: 22,
  },
  description: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  descriptionLine: {
    marginTop: 8,
  },
  action: {
    marginTop: 22,
  },
});

export default EmptyStateSkeleton;
