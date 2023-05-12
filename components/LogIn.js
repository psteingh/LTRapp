import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function LogIn({navigation}) {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TitleText>Login</TitleText>
        <View style={styles.signUpPressableContainer}>
        <Pressable
            style={styles.signUpButtonContainer}
            onPress={() => navigation.navigate("SignUp")} >
        <Text style={styles.signUpButtonText}>Sign Up Page</Text>
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
    signUpPressableContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        margin: 5
    },
    signUpButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5
    },
    signUpButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});