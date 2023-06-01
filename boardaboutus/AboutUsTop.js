import { View, Text, StyleSheet } from 'react-native';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <Text style={styles.boardTitle}>Title</Text>
            <Text style={styles.boardMid}>Mid</Text>
            <Text style={styles.boardBottom}>Bottom</Text>
        </View>
    );
}

export default AboutUsTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center'
    },
    boardTitle: {
        fontSize: 30
    },
    boardMid: {
        padding: 5
    },
    boardBottom: {
        padding: 5
    }
});