import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGradScreen from '../constants/lingradscreen';

function AboutLiesBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <Text style={styles.aboutLiesBoardText}>
            About Lies Board
        </Text>

        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    aboutLiesBoardText: {
        fontSize: 20,
        color: Colors.primaryLred,
        backgroundColor: 'transparent'        
    }
});