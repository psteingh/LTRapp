import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import TextImage from '../constants/TextImage';

function AboutUsImage() {
  return (
    <View>
      <ImageBackground
        style={styles.aboutUsImage}
        source={require('../assets/images/ltrdeceive.png')}>
      <View style={styles.textView}>
      <Text>Text Image Test</Text>
      </View>
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
  },
  textView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
  }
});
