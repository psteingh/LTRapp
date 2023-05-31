import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';

import AboutUsImage from './AboutUsImage';

function AboutUsBoard() {
    return (
        <View style={styles.aboutUsBoardContainer}>
        <LinGradScreen />
        <AboutUsImage />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    aboutUsBoardContainer: {
        flex: 1
    }
});