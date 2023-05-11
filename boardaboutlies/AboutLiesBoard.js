import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function AboutLiesBoard() {
    return (
        <View style={styles.aboutLiesBoardContainer}>
        <LinGradScreen />
        <TitleText>About Lies Board</TitleText>
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    aboutLiesBoardContainer: {
        flex: 1
    }
});