import { View, StyleSheet } from 'react-native';

import TextTitle from '../constants/TextTitle';
import TextMidBottom from '../constants/TextMidBottom';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <TextTitle>The purpose of Lies To Remember</TextTitle>
            <TextMidBottom>Is for you to be able to track the lies you tell</TextMidBottom>
            <TextMidBottom>It is not to correct a problem</TextMidBottom>
        </View>
    );
}

export default AboutUsTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center',
        margin: 5,
        borderWidth: .5,
        borderColor: 'green'
    }
});