import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function ContactButton({navigation}) {
    return (
        <View style={styles.contactContainer}>
        <Text style={styles.contactText}>ContactButton</Text>
        {/* <Button
            title="Test Contact Page"
            onPress={() => navigation.navigate('MyTabs', {screen: 'ContactPage'})} /> */}
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