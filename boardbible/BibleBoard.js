import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

  function BibleBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <TextTitle>Bible Board</TextTitle>
        </View>
    );
}

export default BibleBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});