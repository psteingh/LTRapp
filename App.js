import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';

// import NavBottom from './home/navbottom';

import Colors from './constants/colors';

export default function App() {

  return (
    <NavigationContainer>
      <LinearGradient
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{ position: "absolute" }} />

      {/* <NavBottom /> */}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
