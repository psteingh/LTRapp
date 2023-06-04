import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function NavButton({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}
            style={styles.navButtonContainer}>
        <Text style={styles.navButtonText}>{`${screenName}`}</Text>
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