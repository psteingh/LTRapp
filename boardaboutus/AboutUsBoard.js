import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';

import AboutUsImage from './AboutUsImage';
import AboutUsTop from './AboutUsTop';

function AboutUsBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <AboutUsImage />
        <AboutUsTop />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});