import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function ContactButton({navigation}) {
    return (
        <View style={styles.contactButtonContainer}>
        <Text style={styles.contactButtonText}>ContactButton</Text>
        <Button
            title="Go to Contact Page"
            onPress={() => navigation.navigate('MyTabs', {screen: 'ContactPage'})} />
        </View>
        
    );
}

export default ContactButton;

const styles = StyleSheet.create({
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.primaryDgreen
    },
    contactButtonText: {
        fontFamily: 'RobotoBold',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});