import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function LogIn({navigation}) {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TitleText>Log In</TitleText>
        <View style={styles.logInPressableContainer}>
        <Pressable
            style={styles.logInButtonContainer}
            onPress={() => navigation.navigate("SignUp")} >
        <Text style={styles.logInButtonText}>Sign Up Page</Text>
        </Pressable>
        </View>
        </View>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    logInContainer: {
        flex: 1
    },
    logInPressableContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        margin: 5
    },
    logInButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5
    },
    logInButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});