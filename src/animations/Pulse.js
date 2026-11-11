import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';

const Pulse = ({
  children,
  duration = 1000,
  minOpacity = 0.4,
  maxOpacity = 1,
  style,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration / 2,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: duration / 2,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [animatedValue, duration]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [minOpacity, maxOpacity],
  });

  return (
    <Animated.View style={[styles.container, { opacity }, style]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
});

export default Pulse;
