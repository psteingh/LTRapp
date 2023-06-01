import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

function LierBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <TextTitle>Lier Board</TextTitle>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});