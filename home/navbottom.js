import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function NavBottom() {
    return (
        <View style={styles.navBottomContainer}>
            <Text style={styles.navBottomText}> NavBottom </Text>
        </View>
    );
}

export default NavBottom;

const styles = StyleSheet.create({
    navBottomContainer: {
        margin: 100
    },
    navBottomText: {
        color: Colors.primaryDblue
    }
});