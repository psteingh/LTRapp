import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGrad from '../constants/lingrad';

function AboutLiesBoard() {
    return (
        <View>
            <Text style={styles.aboutLiesBoardText}> About Lies Board </Text>
        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    aboutLiesBoardText: {
        color: Colors.primaryLred
    }
});