import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from './colors';

function LinGradHeadTab() {
  return (
  <LinearGradient
  colors={[Colors.primaryWhite, Colors.primaryBlack]}
  start={{x: 1, y: 0}}
  end={{x: 0, y: 0}}
  style={styles.linGradHeadTabContainer}
  >
  </LinearGradient>
  );
}

export default LinGradHeadTab;

const styles = StyleSheet.create({
  linGradHeadTabContainer: {
    flex: 1
  }
});
