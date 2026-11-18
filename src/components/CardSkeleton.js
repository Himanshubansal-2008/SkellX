import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxSkeleton from './BoxSkeleton';
import CircleSkeleton from './CircleSkeleton';
import TextSkeleton from './TextSkeleton';
import useTheme from '../hooks/useTheme';
import { toSafeCount, isValidDimension } from '../utils/validateProps';

const CardSkeleton = ({
  width = '100%',
  imageHeight = 150,
  avatarSize = 40,
  lines = 2,
  spacing = 12,
  color,
  cardBackgroundColor,
  animation,
  duration,
  direction,
  highlightColor,
  opacity,
  minOpacity,
  maxOpacity,
  style,
}) => {
  const theme = useTheme();
  const resolvedCardBackground =
    cardBackgroundColor ||
    theme.cardBackground ||
    (theme.name === 'dark' ? '#1F2937' : '#FFFFFF');

  const safeLines = toSafeCount(lines, 2);
  const safeImageHeight = isValidDimension(imageHeight) ? imageHeight : 150;
  const safeAvatarSize = isValidDimension(avatarSize) ? avatarSize : 40;
  const safeSpacing =
    typeof spacing === 'number' && Number.isFinite(spacing) && spacing >= 0
      ? spacing
      : 12;

  const isWidthValid = width === undefined || isValidDimension(width);
  if (!isWidthValid) {
    console.warn(
      `[SkellX] Invalid CardSkeleton width dimension "${width}". Defaulting to "100%".`
    );
  }
  const safeWidth = isWidthValid ? width : '100%';

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
    <View
      style={[
        styles.card,
        {
          width: safeWidth,
          backgroundColor: resolvedCardBackground,
        },
        style,
      ]}
    >
      <BoxSkeleton
        width="100%"
        height={safeImageHeight}
        borderRadius={12}
        {...animationProps}
      />

      <View style={styles.content}>
        <View style={styles.profile}>
          <CircleSkeleton
            size={safeAvatarSize}
            {...animationProps}
          />

          <View style={styles.text}>
            <TextSkeleton
              lines={2}
              lineHeight={10}
              {...animationProps}
            />
          </View>
        </View>

        <TextSkeleton
          lines={safeLines}
          lineHeight={12}
          spacing={safeSpacing}
          {...animationProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
  },
  content: {
    marginTop: 12,
    gap: 12,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    flex: 1,
  },
});

export default CardSkeleton;
