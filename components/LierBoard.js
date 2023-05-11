import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

function LierBoard() {
    return (
        <View style={styles.lierBoardContainer}>
        <LinGradScreen />
        <TitleText>Lier Board</TitleText>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    lierBoardContainer: {
        flex: 1
    }
});