import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function LierBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>Lier Board</TitleText>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});