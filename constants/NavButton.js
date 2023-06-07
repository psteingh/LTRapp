import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function NavButton({screenName, screenTitle}) {
    const navigation = useNavigation();

    function selectNavButton() {
        navigation.navigate(screenName); }

    return (
        <View>
        <Pressable
            onPress={selectNavButton}
            style={styles.navButtonContainer}>
        <Text style={styles.navButtonText}>{screenTitle}</Text>
        </Pressable>
        </View>
    );
}

export default NavButton;

const styles = StyleSheet.create({
    navButtonContainer: {
        backgroundColor: Colors.primaryLblue,
        borderRadius: 6,
        margin: 5
    },
    navButtonText: {
        color: Colors.primaryWhite,
        margin: 5
    }
});