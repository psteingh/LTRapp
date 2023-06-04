import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';
import NavButton from '../constants/NavButton';

  function SignUp() {
    return (
        <View style={styles.signUpContainer}>
        <LinGradScreen />
        <TextTitle>Sign Up</TextTitle>
        <View style={styles.signUpNavButtonCont}>
            <NavButton screenName='LogIn' />
        </View>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1
    },
    signUpNavButtonCont: {
        marginHorizontal: 5,
        alignItems: 'center'
    }
});