import React, {useRef} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {WINDOW_HEIGHT} from '../utils';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const MomoHeader = () => {
  const animatedValue = useRef(new Animated.Value(0)).current; // Animated Value sẽ lưu lại khoảng cách mà người dùng scroll theo chiều dọc
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');
  const searchInputAnimation = {
    transform: [
      {
        // scale X dùng để thu nhỏ cả 2 phía từ trái và phải vào giữa
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50], // Khi scroll càng xuống dưới giá trị input càng tăng lên
          outputRange: [1, 0], // Thì giá trị scaleX càng giảm đi
          extrapolate: 'clamp', // Để khi scroll lên thành số âm thì nó cái outputRange nó không tăng lên 2,3,4
        }),
      },
      {
        // Translate X để thu nhỏ từ phải về phía trái
        translateX: animatedValue.interpolate({
          inputRange: [0, 25], // Khi càng scroll xuống
          outputRange: [0, -100], // Thì giá trị (searchInput) càng di chuyển qua bên trái
          extrapolate: 'clamp', //
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25], // Khi càng scroll xuống
      outputRange: [1, 0], // Thì giá trị opacity càng mờ đi
      extrapolate: 'clamp', //
    }),
  };
  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp', //
    }),
  };
  const depositViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 44], // Di chuyển từ trái qua phải 36 đơn vị
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55], // Di chuyển từ dưới lên trên 55 đơn vị
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  const withdrawViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -16], // Di chuyển từ phải qua trái 16 đơn vị
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55], // Di chuyển từ dưới lên trên 55 đơn vị
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const qRViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -56], // Di chuyển từ phải qua trái 56 đơn vị
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55], // Di chuyển từ dưới lên trên 55 đơn vị
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const scanViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -92], // Di chuyển từ phải qua trái 92 đơn vị
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55], // Di chuyển từ dưới lên trên 55 đơn vị
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../images/momo/search.png')}
              style={styles.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={[styles.searchInput, searchInputAnimation]}
            />
          </View>
          <Image
            source={require('../images/momo/bell.png')}
            style={styles.bellIcon}
          />
          <Image
            source={require('../images/momo/avatar.png')}
            style={styles.avatarIcon}
          />
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('../images/momo/deposit-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../images/momo/deposit.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              NẠP TIỀN
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, withdrawViewAnimation]}>
            <Animated.Image
              source={require('../images/momo/withdraw-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../images/momo/withdraw.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              RÚT TIỀN
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, qRViewAnimation]}>
            <Animated.Image
              source={require('../images/momo/qr-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../images/momo/qr.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              MÃ QR
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, scanViewAnimation]}>
            <Animated.Image
              source={require('../images/momo/scan-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../images/momo/scan.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              QUÉT MÃ
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
            animated: true,
          });
        }} // được gọi khi người dùng buông tay ra và không dùng nữa
        scrollEventThrottle={16}>
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent} />
      </ScrollView>
    </View>
  );
};

export default MomoHeader;
const UPPER_HEADER_HEIGHT = 40;
const LOWER_HEADER_HEIGHT = 96;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#AF0C6E',
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  bellIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  avatarIcon: {
    width: 28,
    height: 28,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  feature: {
    alignItems: 'center',
  },
  featureIconCircle: {
    width: 32,
    height: 32,
  },
  featureIcon: {
    height: 16,
    width: 16,
    position: 'absolute',
    top: 8,
  },
  featureName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
    marginTop: 12,
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: 'white',
  },
});
