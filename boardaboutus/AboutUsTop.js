import { View, StyleSheet } from 'react-native';

import TextTopTitle from '../constants/TextTopTitle';
import TextTopMidBottom from '../constants/TextTopMidBottom';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <TextTopTitle>Title</TextTopTitle>
            <TextTopMidBottom>Mid</TextTopMidBottom>
            <TextTopMidBottom>Bottom</TextTopMidBottom>
        </View>
    );
}

export default AboutUsTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center',
    }
});