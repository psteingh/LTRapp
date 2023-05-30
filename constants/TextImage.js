import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextImage({children}) {
    return (
        <View>
            <Text style={styles.textImage}>{children}</Text>
        </View>
    );
}

export default TextImage;

const styles = StyleSheet.create({
    textImage: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 20,
        color: Colors.primaryOffWhite,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});