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
        fontFamily: 'RobotoBold',
        fontSize: 15,
        color: Colors.primaryWhite,
        borderWidth: 1,
        borderColor: 'green',
        margin: 5,
        padding: 2
    }
});