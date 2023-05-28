import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';
import ButtonUseNav from '../constants/ButtonUseNav';

  function SignUp() {
    return (
        <View style={styles.signUpContainer}>
        <LinGradScreen />
        <TextTitle>Sign Up</TextTitle>
        <View style={styles.signUpButtonUseNavCont}>
            <ButtonUseNav screenName='LogIn' />
        </View>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1
    },
    signUpButtonUseNavCont: {
        marginHorizontal: 5,
        alignItems: 'center'
    }
});