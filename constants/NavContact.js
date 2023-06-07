import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function NavContact({screenName, screenTitle}) {
    const navigation = useNavigation();

    function selectNavContact() {
        navigation.navigate(screenName); }
    
    return (
        <View>
        <Pressable
            onPress={selectNavContact}
            style={styles.navContactContainer}>
        <Text style={styles.navContactText}>{screenTitle}</Text>
        </Pressable>
        </View>
    );
}

export default NavContact;

const styles = StyleSheet.create({
    navContactContainer: {
        backgroundColor: Colors.primaryLgreen,
        borderRadius: 5,
        margin: 5
    },
    navContactText: {
        color: Colors.primaryWhite,
        margin: 5
    }
});