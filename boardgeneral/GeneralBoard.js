import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

  function GeneralBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <TextTitle>General Board</TextTitle>
        </View>
    );
}

export default GeneralBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});