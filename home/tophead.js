import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function TopHead() {
    return (
        <View>
            <Text style={styles.topHeadText}> TopHead </Text>
        </View>
    );
}

export default TopHead;

const styles = StyleSheet.create({
    topHeadText: {
        color: Colors.primaryOffWhite,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
});