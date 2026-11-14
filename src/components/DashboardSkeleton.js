import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import CircleSkeleton from './CircleSkeleton';

const DashboardSkeleton = ({
  stats = 4,
  activities = 3,
  showChart = true,
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
      {/* Dashboard heading */}
      <View style={styles.heading}>
        <BoxSkeleton
          width="55%"
          height={22}
          borderRadius={5}
          {...animationProps}
        />
        <BoxSkeleton
          width="75%"
          height={12}
          borderRadius={4}
          style={styles.subtitle}
          {...animationProps}
        />
      </View>

      {/* Statistic cards */}
      <View style={styles.stats}>
        {Array.from({ length: Math.max(0, stats) }, (_, index) => (
          <View key={index} style={styles.statCard}>
            <BoxSkeleton
              width="55%"
              height={11}
              borderRadius={4}
              {...animationProps}
            />
            <BoxSkeleton
              width="75%"
              height={23}
              borderRadius={5}
              style={styles.statValue}
              {...animationProps}
            />
          </View>
        ))}
      </View>

      {/* Chart placeholder */}
      {showChart && (
        <View style={styles.chart}>
          <BoxSkeleton
            width="40%"
            height={15}
            borderRadius={4}
            {...animationProps}
          />
          <BoxSkeleton
            width="100%"
            height={150}
            borderRadius={10}
            style={styles.chartBody}
            {...animationProps}
          />
        </View>
      )}

      {/* Recent activity */}
      <View style={styles.activity}>
        <BoxSkeleton
          width="45%"
          height={17}
          borderRadius={4}
          style={styles.activityTitle}
          {...animationProps}
        />

        {Array.from({ length: Math.max(0, activities) }, (_, index) => (
          <View key={index} style={styles.activityItem}>
            <CircleSkeleton size={36} {...animationProps} />
            <View style={styles.activityContent}>
              <BoxSkeleton
                width="65%"
                height={12}
                borderRadius={4}
                {...animationProps}
              />
              <BoxSkeleton
                width="40%"
                height={9}
                borderRadius={4}
                style={styles.activitySubtitle}
                {...animationProps}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  heading: {
    marginBottom: 22,
  },
  subtitle: {
    marginTop: 9,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    padding: 12,
    marginBottom: 12,
  },
  statValue: {
    marginTop: 12,
  },
  chart: {
    marginTop: 12,
    marginBottom: 24,
  },
  chartBody: {
    marginTop: 14,
  },
  activityTitle: {
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  activityContent: {
    flex: 1,
    marginLeft: 12,
  },
  activitySubtitle: {
    marginTop: 8,
  },
});

export default DashboardSkeleton;
