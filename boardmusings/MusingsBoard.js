import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

  function MusingsBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <TextTitle>Musings Board</TextTitle>
        </View>
    );
}

export default MusingsBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});