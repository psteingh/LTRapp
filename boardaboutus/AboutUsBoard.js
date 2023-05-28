import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

import AboutUsImage from './AboutUsImage';

function AboutUsBoard() {
    return (
        <View style={styles.aboutUsBoardContainer}>
        <LinGradScreen />
        <TextTitle>About Us Board</TextTitle>
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