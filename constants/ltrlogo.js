import { View, Image, StyleSheet } from 'react-native';

function LtrLogo() {
  return (
    <View>
      <Image
        style={styles.imageLtrLogo}
        source={require('../assets/images/ltrbrand.png')} />
    </View>
  );
}

export default LtrLogo;

const styles = StyleSheet.create({
  imageLtrLogo: {
    width: 40,
    height: 20,
    margin: 5
  }
});
