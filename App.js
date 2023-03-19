import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HomeComponent from './components/home.component';

import Colors from './constants/colors';

export default function App() {
  return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        style={styles.container}
        >
      <View>
      <HomeComponent />
      <Text>Hello World</Text>
      </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
