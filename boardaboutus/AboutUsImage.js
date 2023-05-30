import { View, Image, StyleSheet } from 'react-native';

import TextImage from '../constants/TextImage';

function AboutUsImage() {
  return (
    <View>
      <Image
        style={styles.aboutUsImage}
        source={require('../assets/images/ltrdeceive.png')}>
      <TextImage>About Us</TextImage>
      </Image>
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
