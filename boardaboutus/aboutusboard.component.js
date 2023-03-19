import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function AboutUsBoard() {
    return (
        <View>
            <Text style={styles.aboutUsBoardText}> About Us Board </Text>
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    aboutUsBoardText: {
        color: Colors.primaryLgreen
    }
});