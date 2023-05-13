import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from './colors';

function LinGradScreen() {
  return (
  <LinearGradient
  colors={[Colors.primaryWhite, Colors.primaryBlack]}
  start={{x: 1, y: 0}}
  end={{x: 0, y: 0}}
  style={styles.background}
  >
  </LinearGradient>
  );
}

export default LinGradScreen;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0    
  }
});
