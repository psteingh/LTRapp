import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function HomeMid() {
    return (
        <View style={styles.homeMidContainer}>
            <View style={styles.homeMidChildContainer}>
            <Text style={styles.homeMidTitle}>Lier Board</Text>
            <Text style={styles.homeMidDescription}>
            Public ...see lies Users have made public</Text>
            </View>
            <View style={styles.homeMidChildContainer}>
            <Text style={styles.homeMidTitle}>List of Lies</Text>
            <Text style={styles.homeMidDescription}>
            Private ...Users can store & track their lies</Text>
            </View>
        </View>
    );
}

export default HomeMid;

const styles = StyleSheet.create({
    homeMidContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    homeMidChildContainer: {
        flex: 3,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primaryLred
    },
    homeMidTitle: {
        color: Colors.primaryOffWhite,
        fontSize: 20,
        fontFamily: 'LibreBaskervilleBold'
    },
    homeMidDescription: {
        color: Colors.primaryWhite,
        fontSize: 9,
        fontFamily: 'RobotoBold'
    }
});