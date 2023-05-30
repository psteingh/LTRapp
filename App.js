import { View, Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import HomeBottomTab from './constants/HomeBottomTab';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    LibreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    LibreBaskervilleBold: require('./assets/fonts/LibreBaskerville-Bold.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf')
  });
    if (!loaded) {return null;}
  
  return (
    <>
    <StatusBar style={styles.statusBarContainer} />
    <View style={styles.underStatusBar} >
      <Text>Under Status Bar</Text>
    </View>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeBottomTab"
        component={HomeBottomTab}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarContainer: {
    backgroundColor: 'green'
  },
  underStatusBar: {
    marginTop: 5
  }
});