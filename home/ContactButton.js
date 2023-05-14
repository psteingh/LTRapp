import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/colors';

function ContactButton({screenName}) {
    const navigation = useNavigation();
    return (
        <View style={styles.contactButtonContainer}>
        <Text style={styles.contactButtonText}>ContactButton</Text>
        <Button
            title={`Button ${screenName}`}
            onPress={() => navigation.navigate(screenName)}
            style={styles.contactButtonText} />
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