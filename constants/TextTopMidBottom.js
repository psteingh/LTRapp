import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextTopMidBottom({children}) {
    return (
        <View>
            <Text style={styles.textTopMidBottom}>{children}</Text>
        </View>
    );
}

export default TextTopMidBottom;

const styles = StyleSheet.create({
    textTopMidBottom: {
        color: Colors.primaryWhite
    }
});