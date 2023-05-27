import { View, Image, StyleSheet } from 'react-native';

import TextImage from '../constants/TextImage';

function AboutUsImage() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.aboutUsImage}
        source={require('../assets/images/ltrdeceive.png')} />
      <TextImage>About Us</TextImage>
    </View>
  );
}

export default AboutUsImage;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative'
  },
  aboutUsImage: {
    width: 400,
    height: 200
  }
});
