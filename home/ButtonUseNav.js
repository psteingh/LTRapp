import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/colors';

function ButtonUseNav({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <View style={styles.pressableContainer}>
        <Pressable
            onPress={() => navigation.navigate(screenName)}
            style={styles.contactButtonContainer}>
        <Text style={styles.contactButtonText}>{`${screenName}`}</Text>
        </Pressable>
        </View>
        </View>
    );
}

export default ButtonUseNav;

const styles = StyleSheet.create({
    pressableContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        marginHorizontal: 5,
        marginBottom: 5
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.primaryDgreen
    },
    contactButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});