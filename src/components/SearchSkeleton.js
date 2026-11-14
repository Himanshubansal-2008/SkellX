import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';

const SearchSkeleton = ({
  results = 5,
  showFilters = true,
  showThumbnail = true,
  thumbnailSize = 64,
  filterCount = 4,
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

  return (
    <View style={[styles.container, style]}>
      {/* Search bar */}
      <BoxSkeleton
        width="100%"
        height={46}
        borderRadius={10}
        {...animationProps}
      />

      {/* Filter chips */}
      {showFilters && (
        <View style={styles.filters}>
          {Array.from(
            { length: Math.max(0, filterCount) },
            (_, index) => (
              <BoxSkeleton
                key={index}
                width={index === 0 ? 75 : 60}
                height={30}
                borderRadius={20}
                {...animationProps}
              />
            )
          )}
        </View>
      )}

      {/* Search results */}
      <View style={styles.results}>
        {Array.from(
          { length: Math.max(0, results) },
          (_, index) => (
            <View
              key={index}
              style={[styles.result, { marginBottom: spacing }]}
            >
              {showThumbnail && (
                <BoxSkeleton
                  width={thumbnailSize}
                  height={thumbnailSize}
                  borderRadius={8}
                  {...animationProps}
                />
              )}

              <View style={styles.content}>
                <BoxSkeleton
                  width="75%"
                  height={13}
                  borderRadius={4}
                  {...animationProps}
                />

                <BoxSkeleton
                  width="95%"
                  height={10}
                  borderRadius={4}
                  style={styles.description}
                  {...animationProps}
                />

                <BoxSkeleton
                  width="40%"
                  height={10}
                  borderRadius={4}
                  style={styles.meta}
                  {...animationProps}
                />
              </View>
            </View>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  results: {
    marginTop: 22,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  content: {
    flex: 1,
  },
  description: {
    marginTop: 9,
  },
  meta: {
    marginTop: 8,
  },
});

export default SearchSkeleton;
