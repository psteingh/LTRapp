import { View, StyleSheet } from 'react-native';

function ImageText({children}) {
  return (
  <View style={styles.background}>{children}</View>
  );
}

export default ImageText;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0    
  }
});
