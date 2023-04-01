import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function AboutUsBoard() {
    return (
        <View style={styles.aboutUsBoardView}>
            <Text style={styles.aboutUsBoardText}> About Us Board </Text>
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    aboutUsBoardView: {
        flex: 1
    },
    aboutUsBoardText: {
        color: Colors.primaryLgreen
    }
});