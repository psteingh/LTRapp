import { View, Text, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function AboutUsScreen({navigation}) {
    return (
        <View>
          <Text>About Us Screen</Text>
          <Button
            title="Go to About Us Board"
            onPress={() => navigation.navigate('AboutUs') } />
        </View>
  )}

  function AboutLiesBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>About Lies Board</TitleText>
        <AboutUsScreen />
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});