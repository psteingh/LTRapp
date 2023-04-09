import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';

function LinGrad() {
  return (
  <LinearGradient
  colors={[Colors.primaryWhite, Colors.primaryBlack]}
  start={{x: 0, y: 0}}
  end={{x: 1, y: 0}}
  style={styles.container}/>
  );
}

export default LinGrad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
