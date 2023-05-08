import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function ContactButton() {
    return (
        <View style={styles.contactContainer}>
        <Text style={styles.contactText}>ContactButton</Text>
        </View>
        
    );
}

export default ContactButton;

const styles = StyleSheet.create({
    contactContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.primaryDgreen
    },
    contactText: {
        fontFamily: 'RobotoBold',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});