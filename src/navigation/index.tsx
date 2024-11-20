import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ScreenNames } from './screenNames';
import Login from '../screens/login';
import Splash from '../screens/splash';
import BottomStack from './bottomTabs/bottomStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={ScreenNames.Splash}
          options={{ headerShown: false }}
          component={Splash}
          >
        </Stack.Screen>
        <Stack.Screen
          name={ScreenNames.bottomTab}
          component={BottomStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
        name={ScreenNames.Login}
        component={Login}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator