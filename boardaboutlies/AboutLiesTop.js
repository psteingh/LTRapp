import { View, StyleSheet } from 'react-native';

import TextTitle from '../constants/TextTitle';
import TextMidBottom from '../constants/TextMidBottom';

function AboutLiesTop() {
    return (
        <View style={styles.boardTopContainer}>
            <TextTitle>Purpose of Lies</TextTitle>
            <TextMidBottom>There are many conditions which determine the purpose of lying</TextMidBottom>
            <TextMidBottom>Our society has fully incorporated lying so why not keep track of them for yourself</TextMidBottom>
        </View>
    );
}

export default AboutLiesTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center',
        margin: 5,
        borderWidth: 1,
        borderColor: 'green'
    }
});