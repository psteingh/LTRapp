import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

function LierBoard() {
    return (
        <View style={styles.lierBoardContainer}>
        <LinGradScreen />
        <TextTitle>Lier Board</TextTitle>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    lierBoardContainer: {
        flex: 1
    }
});