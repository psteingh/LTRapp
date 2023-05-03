import { View, Text, StyleSheet } from 'react-native';

import Colors from './colors';

function TitleText({children}) {
    return (
        <View>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
}

export default TitleText;

const styles = StyleSheet.create({
    titleText: {
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