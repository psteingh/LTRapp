import { View, ImageBackground, StyleSheet } from 'react-native';

import TextImage from '../constants/TextImage';

function AboutUsImage() {
  return (
    <View>
      <ImageBackground
        style={styles.aboutUsImage}
        source={require('../assets/images/ltrdeceive.png')}>
      <TextImage>About Us</TextImage>
      </ImageBackground>
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
