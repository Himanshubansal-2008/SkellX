import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
} from 'react-native';

const Shimmer = ({
  width = 200,
  height = 100,
  duration = 1200,
  color = '#FFFFFF',
  backgroundColor = '#E1E1E1',
  opacity = 0.5,
  borderRadius = 8,
  direction = 'left',
  style,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [containerWidth, setContainerWidth] = useState(
    typeof width === 'number' ? width : 0
  );

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => animation.stop();
  }, [animatedValue, duration]);

  const isRightToLeft = direction === 'right';

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: isRightToLeft
      ? [containerWidth, -containerWidth]
      : [-containerWidth, containerWidth],
  });

  return (
    <View
      onLayout={({ nativeEvent }) => {
        const measuredWidth = nativeEvent.layout.width;
        setContainerWidth(current =>
          current === measuredWidth ? current : measuredWidth
        );
      }}
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          backgroundColor,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.highlight,
          {
            backgroundColor: color,
            opacity,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '40%',
  },
});

export default Shimmer;
