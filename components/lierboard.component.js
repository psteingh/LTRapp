import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGradScreen from '../constants/lingradscreen';

function LierBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
            <Text style={styles.lierBoardText}> Lier Board </Text>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    lierBoardText: {
        fontSize: 20,
        color: Colors.primaryLred,
        backgroundColor: 'transparent'
    }
});