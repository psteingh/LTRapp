import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function HomeMid() {
    return (
        <View style={styles.homeMidContainer}>
            <View style={styles.homeMidChildContainer}>
            <Text style={styles.homeMidText}>Lier Board</Text>
            </View>
            <View style={styles.homeMidChildContainer}>
            <Text style={styles.homeMidText}>List of Lies</Text>
            </View>
        </View>
    );
}

export default HomeMid;

const styles = StyleSheet.create({
    homeMidContainer: {
        flex: 1
    },
    homeMidChildContainer: {
        flex: 3
    },
    homeMidText: {
        color: Colors.primaryDgreen
    }
});