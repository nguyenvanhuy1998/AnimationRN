/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const TutorialAnimation = () => {
  // Hướng dẫn animation của Minh Techie
  // https://www.youtube.com/channel/UCGxA-PuYBXinpwGawUqEYpg
  // 1.Hướng dẫn Animated - React Native Animations
  /**
   * 3 thằng này đều thay đổi giá trị animated
   * Animated.decay() starts with an initial velocity and gradually slows to a stop. -> ít sử dụng
   * Animated.spring() provides a basic spring physics model. -> Thay đổi giá trị có tính đàn hồi cũng như có ma sát, gia tốc trong đó
   * Animated.timing() animates a value over time using easing functions -> Thay đổi theo thời gian sử dụng easing functions.
   */
  /**
   * 1. How does the animation work? -> Animation hoạt động như thế nào?
   * 2. What style properties should I use? ->  Sử dụng style properties gì?
   * 3. What animated value should I use? -> Sử dụng Animated Value gì?
   * 4. How should the animated value change? -> Value Animated nên thay đổi như thế nào?
   * 5. Which component to apply the animation to? -> Áp dụng animation cho component nào?
   */
  // EXP
  /**
   * 1. Animation sẽ đi từ trái sang phải
   * 2. Sử dụng marginLeft
   * 3. Sử dụng Animated.Value vì marginLeft chỉ sử dụng 1 con số (giá trị đơn) -> Dùng Animated.Value như thế nào? ở bên dưới sẽ hướng dẫn
   * 4. Sử dụng Animated.timing để thay đổi giá trị của Animated.Value (có 2 cách 1 là bấm nút, 2 là sử dụng useEffect)
   * 5. Áp dụng animated value cho marginLeft và gắn vào component View cái Animated Component
   */
  //================= Ex1: Animated chạy từ trái sang phải ==========================
  // const animatedValue = useRef(new Animated.Value(100)).current; // 3
  // useEffect(() => {
  //   Animated.timing(animatedValue, {
  //     toValue: 200,
  //     duration: 2000,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animatedValue]);
  // return (
  //   <Animated.View
  //     style={{
  //       width: 100,
  //       height: 100,
  //       marginTop: 100,
  //       marginLeft: animatedValue,
  //       backgroundColor: '#19b5fe',
  //     }}
  //   />
  // );
  //================= Ex2: Animated chạy từ trái sang phải từ trên xuống dưới ==========================
  // const animatedValue = useRef(
  //   new Animated.ValueXY({
  //     x: 100,
  //     y: 100,
  //   }),
  // ).current;
  // useEffect(() => {
  //   Animated.timing(animatedValue, {
  //     toValue: {
  //       x: 200,
  //       y: 200,
  //     },
  //     duration: 2000,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animatedValue]);
  // return (
  //   <Animated.View
  //     style={{
  //       width: 100,
  //       height: 100,
  //       marginTop: animatedValue.y,
  //       marginLeft: animatedValue.x,
  //       backgroundColor: '#19b5fe',
  //     }}
  //   />
  // );
  //================= Ex3: Animated với ScrollView ==========================
  /**
   * Interpolation: Để map cái inputRange và outputRange
   */
  // const animatedValue = useRef(new Animated.Value(0)).current;
  // return (
  //   <SafeAreaView>
  //     <Animated.View
  //       style={{
  //         width: '100%',
  //         height: 100,
  //         backgroundColor: '#1eb5fe',
  //         opacity: animatedValue.interpolate({
  //           inputRange: [0, 100],
  //           outputRange: [1, 0],
  //         }),
  //       }}
  //     />
  //     <ScrollView
  //       onScroll={e => {
  //         animatedValue.setValue(e.nativeEvent.contentOffset.y);
  //       }}
  //       scrollEventThrottle={16}>
  //       <View
  //         style={{
  //           height: 1000,
  //         }}
  //       />
  //     </ScrollView>
  //   </SafeAreaView>
  // );
  //================= Ex4: Animated với ScrollView ==========================
  /**
   * useNativeDriver: true -> sử dụng native driver
   */
  const animatedValue = useRef(new Animated.Value(100)).current; // 3
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        marginTop: 100,
        // marginLeft: animatedValue,
        transform: [{translateX: animatedValue}],
        backgroundColor: '#19b5fe',
      }}
    />
  );
};

export default TutorialAnimation;
