import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function NavContact({screenName}) {
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

export default NavContact;

const styles = StyleSheet.create({
    pressableContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        borderRadius: 5,
        margin: 5
    },
    contactButtonText: {
        color: Colors.primaryWhite,
        margin: 5
    }
});