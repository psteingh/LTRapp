import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function AboutUsBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>About Us Board</TitleText>
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});