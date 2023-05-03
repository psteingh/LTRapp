import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function SubTitle() {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleText}>This site is to store & track your lies</Text>
        </View>
    );
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitleContainer: {
        backgroundColor: 'transparent',
        margin: 5
    },
    subTitleText: {
        fontFamily: 'RobotoBold',
        fontSize: 15,
        color: Colors.primaryWhite,
        margin: 5
    }
});