import { View, Text, StyleSheet } from 'react-native';

import ContactTile from '../constants/ContactTile';

import Colors from '../constants/colors';

function Contact() {
    return (
        <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Contact Us</Text>
        </View>
        
    );
}

export default Contact;

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