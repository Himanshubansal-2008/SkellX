import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import { toSafeCount, toSafeColumns, isValidDimension } from '../utils/validateProps';

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

  const safeRows = toSafeCount(rows, 5);
  const safeColumns = toSafeColumns(columns, 4);
  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 16;

  const isRowHeightValid = rowHeight === undefined || isValidDimension(rowHeight);
  if (!isRowHeightValid) {
    console.warn(
      `[SkellX] Invalid TableSkeleton rowHeight dimension "${rowHeight}". Defaulting to 16.`
    );
  }
  const safeRowHeight = isRowHeightValid ? rowHeight : 16;
  const cellWidth = `${100 / safeColumns}%`;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: safeRows }, (_, rowIndex) => (
        <View
          key={rowIndex}
          style={[
            styles.row,
            { marginBottom: rowIndex === safeRows - 1 ? 0 : safeSpacing },
          ]}
        >
          {Array.from({ length: safeColumns }, (_, columnIndex) => (
            <View
              key={columnIndex}
              style={[styles.cell, { width: cellWidth }]}
            >
              <BoxSkeleton
                width="85%"
                height={safeRowHeight}
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
