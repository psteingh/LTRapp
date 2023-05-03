import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function SubTitle() {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleText}>SubTitle</Text>
        </View>
    );
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitleContainer: {
        backgroundColor: 'transparent'
    },
    subTitleText: {
        fontFamily: 'RobotoBold',
        fontSize: 15
    }
});