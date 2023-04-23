import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGradScreen from '../constants/lingradscreen';

function AboutLiesBoard() {
    return (
        <LinGradScreen>
        <View style={styles.viewContainer}>
            <Text style={styles.aboutLiesBoardText}> About Lies Board </Text>
        </View>
        </LinGradScreen>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    aboutLiesBoardText: {
        color: Colors.primaryLred
    }
});