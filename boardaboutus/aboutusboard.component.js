import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function AboutUsBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>Test TitleText component</TitleText>
            <Text style={styles.aboutUsBoardText}> About Us Board </Text>
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    aboutUsBoardText: {
        fontSize: 20,
        color: Colors.primaryLred,
        backgroundColor: 'transparent'
    }
});