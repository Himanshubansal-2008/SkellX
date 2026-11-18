import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import { toSafeCount, isValidDimension } from '../utils/validateProps';

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

  const safeFields = toSafeCount(fields, 3);

  const isInputHeightValid = inputHeight === undefined || isValidDimension(inputHeight);
  if (!isInputHeightValid) {
    console.warn(
      `[SkellX] Invalid FormSkeleton inputHeight dimension "${inputHeight}". Defaulting to 44.`
    );
  }
  const safeInputHeight = isInputHeightValid ? inputHeight : 44;

  const isLabelWidthValid = labelWidth === undefined || isValidDimension(labelWidth);
  if (!isLabelWidthValid) {
    console.warn(
      `[SkellX] Invalid FormSkeleton labelWidth dimension "${labelWidth}". Defaulting to "35%".`
    );
  }
  const safeLabelWidth = isLabelWidthValid ? labelWidth : '35%';

  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 18;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: safeFields }, (_, index) => (
        <View
          key={index}
          style={{ marginBottom: index === safeFields - 1 ? 0 : safeSpacing }}
        >
          {showLabels && (
            <BoxSkeleton
              width={safeLabelWidth}
              height={10}
              borderRadius={4}
              {...animationProps}
              style={styles.label}
            />
          )}

          <BoxSkeleton
            width="100%"
            height={safeInputHeight}
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
