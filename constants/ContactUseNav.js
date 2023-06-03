import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function ContactUseNav({screenName}) {
    const navigation = useNavigation();
    return (
        <View style={styles.pressableContainer}>
        <Pressable
            onPress={() => navigation.navigate(screenName)}
            style={styles.contactButtonContainer}>
        <Text style={styles.contactButtonText}>{`${screenName}`}</Text>
        </Pressable>
        </View>
    );
}

export default ContactUseNav;

const styles = StyleSheet.create({
    pressableContainer: {
        alignItems: 'center'
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        borderRadius: 5,
        margin: 5
    },
    contactButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});