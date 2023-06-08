import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import AboutLiesImage from './AboutLiesImage';
import AboutLiesTop from './AboutLiesTop';

  function AboutLiesBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <AboutLiesImage />
        <AboutLiesTop />
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});