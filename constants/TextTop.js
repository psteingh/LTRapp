import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextTop({children}) {
    return (
        <View>
            <Text style={styles.textTop}>{children}</Text>
        </View>
    );
}

export default TextTop;

const styles = StyleSheet.create({
    textTop: {
        color: Colors.primaryWhite,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primaryYellow,
    }
});