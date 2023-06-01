import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

  function MediaBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <TextTitle>Media Board</TextTitle>
        </View>
    );
}

export default MediaBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});