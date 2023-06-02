import { View, StyleSheet } from 'react-native';

function ImageWithText({children}) {
  return (
  <View style={styles.imageWithTextBackground}>{children}</View>
  );
}

export default ImageWithText;

const styles = StyleSheet.create({
  imageWithTextBackground: {
    position: 'relative',
  }
});
