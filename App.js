import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatListScreen from './screens/ChatListScreen';

SplashScreen.preventAutoHideAsync();
const Statck = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    black: require('./assets/fonts//Roboto-Black.ttf'),
    blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
    bold: require('./assets/fonts/Roboto-Bold.ttf'),
    boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
    italic: require('./assets/fonts/Roboto-Italic.ttf'),
    light: require('./assets/fonts/Roboto-Light.ttf'),
    lightItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
    medium: require('./assets/fonts/Roboto-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
    regular: require('./assets/fonts/Roboto-Regular.ttf'),
    thin: require('./assets/fonts/Roboto-Thin.ttf'),
    thinItalic: require('./assets/fonts/Roboto-ThinItalic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        console.log('Font Loaded');
      }
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Statck.Navigator>
          <Statck.Screen name='ChatList' component={ChatListScreen} />
        </Statck.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  label: {
    fontFamily: 'light',
  },
});
