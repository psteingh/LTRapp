import { View, StyleSheet } from 'react-native';

import TextTitle from '../constants/TextTitle';
import TextMidBottom from '../constants/TextMidBottom';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <TextTitle>Title</TextTitle>
            <TextMidBottom>Mid</TextMidBottom>
            <TextMidBottom>Bottom</TextMidBottom>
        </View>
    );
}

export default AboutUsTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'green'
    }
});