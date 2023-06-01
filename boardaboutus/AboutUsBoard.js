import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';

import AboutUsImage from './AboutUsImage';

function AboutUsBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <AboutUsImage />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1
    }
});