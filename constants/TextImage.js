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
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textImageFont: {
        fontFamily: 'RobotoBold',
        fontSize: 30,
        color: Colors.primaryOffWhite,
    },
});