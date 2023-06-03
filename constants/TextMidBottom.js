import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextMidBottom({children}) {
    return (
        <View>
            <Text style={styles.textMidBottom}>{children}</Text>
        </View>
    );
}

export default TextMidBottom;

const styles = StyleSheet.create({
    textMidBottom: {
        color: Colors.primaryWhite
    }
});