import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function NavBottom() {
    return (
        <View>
            <Text style={styles.navBottomText}> NavBottom </Text>
        </View>
    );
}

export default NavBottom;

const styles = StyleSheet.create({
    navBottomText: {
        color: Colors.primaryDblue
    }
});