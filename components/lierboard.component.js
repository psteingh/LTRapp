import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function LierBoard() {
    return (
        <View>
            <Text style={styles.lierBoardText}> Lier Board </Text>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    lierBoardText: {
        color: Colors.primaryLred
    }
});