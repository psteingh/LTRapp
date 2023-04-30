import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function AboutLiesBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>About Lies Board</TitleText>
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});