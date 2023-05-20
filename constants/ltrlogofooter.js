import { View, Image, StyleSheet } from 'react-native';

function LtrLogoFooter() {
  return (
    <View>
      <Image
        style={styles.imageLtrLogoFooter}
        source={require('../assets/images/ltrbrand.png')} />
    </View>
  );
}

export default LtrLogoFooter;

const styles = StyleSheet.create({
  imageLtrLogoFooter: {
    width: 40,
    height: 20,
    margin: 5
  }
});
