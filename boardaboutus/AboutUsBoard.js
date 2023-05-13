import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

function AboutUsBoard() {
    return (
        <View style={styles.aboutUsBoardContainer}>
        <LinGradScreen />
        <TitleText>About Us Board</TitleText>
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    aboutUsBoardContainer: {
        flex: 1
    }
});