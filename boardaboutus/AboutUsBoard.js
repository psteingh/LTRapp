import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';

import AboutUsImage from './AboutUsImage';
import AboutUsNav from './AboutUsNav';
import AboutUsTop from './AboutUsTop';

function AboutUsBoard() {
    return (
        <View style={styles.boardContainer}>
        <LinGradScreen />
        <AboutUsImage />
        <AboutUsNav />
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