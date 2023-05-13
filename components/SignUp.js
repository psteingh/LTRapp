import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function SignUp({navigation}) {
    return (
        <View style={styles.signUpContainer}>
        <LinGradScreen />
        <TitleText>Sign Up</TitleText>
        <View style={styles.signUpPressableContainer}>
        <Pressable
            style={styles.signUpButtonContainer}
            onPress={() => navigation.navigate("LogIn")} >
        <Text style={styles.signUpButtonText}>Log In Page</Text>
        </Pressable>
        </View>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
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