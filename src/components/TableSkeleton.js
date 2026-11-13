import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';

const TableSkeleton = ({
  rows = 5,
  columns = 4,
  rowHeight = 16,
  spacing = 16,
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

  const cellWidth = `${100 / Math.max(1, columns)}%`;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <View
          key={rowIndex}
          style={[styles.row, { marginBottom: spacing }]}
        >
          {Array.from({ length: columns }, (_, columnIndex) => (
            <View
              key={columnIndex}
              style={[styles.cell, { width: cellWidth }]}
            >
              <BoxSkeleton
                width="85%"
                height={rowHeight}
                {...animationProps}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    justifyContent: 'center',
  },
});

export default TableSkeleton;
