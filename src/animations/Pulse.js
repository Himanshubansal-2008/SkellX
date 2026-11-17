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
  const isDurationValid =
    typeof duration === 'number' && Number.isFinite(duration) && duration > 0;
  if (!isDurationValid && duration !== undefined) {
    console.warn(
      `[SkellX] Invalid pulse duration "${duration}". Expected a positive number. Using default (1000ms).`
    );
  }
  const resolvedDuration = isDurationValid ? duration : 1000;

  const isMinValid =
    typeof minOpacity === 'number' && Number.isFinite(minOpacity) && minOpacity >= 0 && minOpacity <= 1;
  const isMaxValid =
    typeof maxOpacity === 'number' && Number.isFinite(maxOpacity) && maxOpacity >= 0 && maxOpacity <= 1;

  if (!isMinValid && minOpacity !== undefined) {
    console.warn(
      `[SkellX] Invalid pulse minOpacity "${minOpacity}". Expected a number between 0 and 1. Defaulting to 0.4.`
    );
  }
  if (!isMaxValid && maxOpacity !== undefined) {
    console.warn(
      `[SkellX] Invalid pulse maxOpacity "${maxOpacity}". Expected a number between 0 and 1. Defaulting to 1.`
    );
  }

  let resolvedMin = isMinValid ? minOpacity : 0.4;
  let resolvedMax = isMaxValid ? maxOpacity : 1;

  if (resolvedMin > resolvedMax) {
    console.warn(
      `[SkellX] Pulse minOpacity (${resolvedMin}) cannot be greater than maxOpacity (${resolvedMax}). Swapping values.`
    );
    const temp = resolvedMin;
    resolvedMin = resolvedMax;
    resolvedMax = temp;
  }

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: resolvedDuration / 2,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: resolvedDuration / 2,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [animatedValue, resolvedDuration]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [resolvedMin, resolvedMax],
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
