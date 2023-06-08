import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import AboutLiesImage from './AboutLiesImage';

  function AboutLiesBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <AboutLiesImage />
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});