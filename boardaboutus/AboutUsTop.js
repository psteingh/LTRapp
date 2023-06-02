import { View, Text, StyleSheet } from 'react-native';

import TextTop from '../constants/TextTop';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <Text style={styles.boardTitle}>Title</Text>
            <View><TextTop>Mid</TextTop></View>
            <View><Text>Bottom</Text></View>
        </View>
    );
}

export default AboutUsTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center',
    },
    boardTitle: {
        fontSize: 30,
        color: 'white'
    }
});