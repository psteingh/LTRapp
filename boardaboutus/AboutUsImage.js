import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import ImageText from '../constants/ImageText';
import TextImage from '../constants/TextImage';

function AboutUsImage() {
  return (
    <View>
      <ImageText>
      <ImageBackground
        style={styles.aboutUsImage}
        source={require('../assets/images/ltrdeceive.png')}>
      <Text>Image Text Test</Text>
      <TextImage>About Us</TextImage>
      </ImageBackground>
      </ImageText>
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
