import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TextTitle({children}) {
    return (
        <View>
            <Text style={styles.textTitle}>{children}</Text>
        </View>
    );
}

export default TextTitle;

const styles = StyleSheet.create({
    textTitle: {
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