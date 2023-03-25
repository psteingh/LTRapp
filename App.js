import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';

import HomeComponent from './components/home.component';

import Colors from './constants/colors';

export default function App() {
  return (
    <NavigationContainer>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        style={styles.container}
        >
      <HomeComponent />
      </LinearGradient>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
