import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextImage({children}) {
    return (
        <View style={styles.textImage}>
            <Text style={styles.textImageFont}>{children}</Text>
        </View>
    );
}

export default TextImage;

const styles = StyleSheet.create({
    textImage: {
        marginTop: 40,
        alignItems: 'center'
    },
    textImageFont: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 40,
        color: Colors.primaryOffWhite,
    },
});