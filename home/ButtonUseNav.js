import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/colors';

function ButtonUseNav({screenName}) {
    const navigation = useNavigation();
    return (
        <Button
            title={`Button ${screenName}`}
            onPress={() => navigation.navigate(screenName)}
            style={styles.buttonUseNavContainer} />
    );
}

export default ButtonUseNav;

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
    },
    buttonUseNavContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5
    }
});