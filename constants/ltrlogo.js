import { View, Image, StyleSheet } from 'react-native';

import Colors from './colors';

function LtrLogo() {
  return (
    <View>
      <Image style={styles.imageLtrLogo} source={require('../assets/images/ltrbrand.png')} />
    </View>
  );
}

export default LtrLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLtrLogo: {
    width: 20,
    height: 10,
    margin: 5
  }
});
