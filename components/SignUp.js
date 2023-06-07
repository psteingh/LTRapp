import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';
import NavContact from '../constants/NavContact';

  function SignUp() {
    return (
        <View style={styles.signUpContainer}>
        <LinGradScreen />
        <TextTitle>Sign Up</TextTitle>
        <View style={styles.signUpNavContactCont}>
            <NavContact
                screenName='LogIn'
                screenTitle='Login' />
        </View>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1
    },
    signUpNavContactCont: {
        marginHorizontal: 5,
        alignItems: 'center'
    }
});