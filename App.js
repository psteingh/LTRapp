import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';

import NavBottom from './home/navbottom';

import Colors from './constants/colors';

export default function App() {

  return (
    <NavigationContainer>
      <LinearGradient
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}        
        />

      <NavBottom />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
