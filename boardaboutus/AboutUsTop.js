import { View, Text, StyleSheet } from 'react-native';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <Text style={styles.boardTitle}>Title</Text>
            <View><Text style={styles.boardMid}>Mid</Text></View>
            <View><Text style={styles.boardBottom}>Bottom</Text></View>
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
    },
    boardMid: {
        padding: 5,
        color: 'white'
    },
    boardBottom: {
        padding: 5,
        color: 'white'
    }
});