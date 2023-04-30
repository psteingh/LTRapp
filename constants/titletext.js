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
        fontFamily: 'LibreBaskerville',
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.primaryOffWhite,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colors.primaryLgreen,
        margin: 10,
        padding: 20,
    }
});