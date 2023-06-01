import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

  function AboutLiesBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <TextTitle>About Lies Board</TextTitle>
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});