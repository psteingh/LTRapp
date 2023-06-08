import { View, ImageBackground, StyleSheet } from 'react-native';

import ImageWithText from '../constants/ImageWithText';
import TextImage from '../constants/TextImage';

function AboutLiesImage() {
  return (
    <View>
      <ImageWithText>
      <ImageBackground
        style={styles.aboutLiesImage}
        source={require('../assets/images/ltrliestruth.png')}>
      <TextImage>About Lies</TextImage>
      </ImageBackground>
      </ImageWithText>
    </View>
  );
}

export default AboutLiesImage;

const styles = StyleSheet.create({
  aboutLiesImage: {
    width: 400,
    height: 200
  }
});
