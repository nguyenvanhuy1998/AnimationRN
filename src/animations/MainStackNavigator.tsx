import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MomoHeader from './MomoHeader/MomoHeader';
import AnimationBasic from './AnimationBasic/AnimationBasic';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MomoHeader"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MomoHeader" component={MomoHeader} />
        <Stack.Screen name="AnimationBasic" component={AnimationBasic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
