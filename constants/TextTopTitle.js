import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextTopTitle({children}) {
    return (
        <View>
            <Text style={styles.textTopTitle}>{children}</Text>
        </View>
    );
}

export default TextTopTitle;

const styles = StyleSheet.create({
    textTopTitle: {
        fontSize: 30,
        color: Colors.primaryWhite
    }
});