import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  AnimatedRef,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {OnboardingData} from '../../../data/onboardingData';

type Props = {
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  flatListIndex: SharedValue<number>;
  dataLength: number;
  x: SharedValue<number>;
};

const CustomButton = ({flatListRef, flatListIndex, dataLength, x}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const bgColorAnimation = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#005b4f', '#1e2169', '#f15937'],
    );
    return {
      backgroundColor: bgColorAnimation,
      width:
        flatListIndex.value < dataLength - 1 ? withSpring(60) : withSpring(140),
    };
  });
  const arrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });
  const textButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({
            index: flatListIndex.value + 1,
          });
        } else {
          console.log('NAVIGATE TO NEXT SCREEN');
        }
      }}>
      <Animated.View style={[styles.container, buttonAnimatedStyle]}>
        <Animated.Text style={[styles.textButton, textButtonAnimatedStyle]}>
          Get Started
        </Animated.Text>
        <Animated.Image
          source={require('../../../assets/images/ArrowIcon.png')}
          style={[styles.arrow, arrowAnimatedStyle]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 60,
  },
  arrow: {
    position: 'absolute',
    width: 30,
    height: 30,
  },
  textButton: {
    position: 'absolute',
    fontSize: 16,
    color: 'white',
  },
});
