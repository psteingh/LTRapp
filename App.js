import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './constants/colors';

export default function App() {
  return (
      <LinearGradient
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        style={styles.container}
        >
      <View>
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
