import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';
import NavContact from '../constants/NavContact';

  function LogIn() {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TextTitle>Log In</TextTitle>
        <View style={styles.logInNavContactCont}>
            <NavContact
                screenName='SignUp'
                screenTitle='Sign Up' />
        </View>
        </View>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    logInContainer: {
        flex: 1
    },
    logInNavContactCont: {
        marginHorizontal: 5,
        alignItems: 'center'
    }
});