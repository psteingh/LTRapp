import { View, ImageBackground, StyleSheet } from 'react-native';

import ImageWithText from '../constants/ImageWithText';
import TextImage from '../constants/TextImage';

function AboutUsImage() {
  return (
    <View>
      <ImageWithText>
      <ImageBackground
        style={styles.aboutUsImage}
        source={require('../assets/images/ltrdeceive.png')}>
      <TextImage>About Us</TextImage>
      </ImageBackground>
      </ImageWithText>
    </View>
  );
}

export default AboutUsImage;

const styles = StyleSheet.create({
  aboutUsImage: {
    width: 400,
    height: 200
  }
});
