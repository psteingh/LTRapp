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
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primaryLgreen,
        margin: 5,
        paddingLeft: 15,
    }
});