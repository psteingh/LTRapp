import { View, Image, Pressable, StyleSheet } from 'react-native';

function LtrLogoFooter({navigation}) {
  return (
    <View>
    <View>
      <Pressable
        onPress={() => navigation.navigate('ContactPage')}>
      <Image
        style={styles.imageLtrLogoFooter}
        source={require('../assets/images/ltrbrand.png')} />
      
      </Pressable>
    </View>
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
