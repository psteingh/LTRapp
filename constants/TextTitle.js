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
        fontSize: 20,
        color: Colors.primaryWhite,
        borderWidth: 1,
        borderColor: Colors.primaryLgreen,
        margin: 15,
        padding: 5
    }
});