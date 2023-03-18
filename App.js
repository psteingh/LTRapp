import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.primaryBlack, Colors.primaryWhite]}>
        <Text>Hello World</Text> 
      </LinearGradient>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
