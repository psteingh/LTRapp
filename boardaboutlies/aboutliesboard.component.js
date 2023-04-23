import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGradScreen from '../constants/lingradscreen';

function AboutLiesBoard() {
    return (
        <LinGradScreen>
        <View>
            <Text style={styles.aboutLiesBoardText}> About Lies Board </Text>
        </View>
        </LinGradScreen>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    aboutLiesBoardText: {
        color: Colors.primaryLred
    }
});