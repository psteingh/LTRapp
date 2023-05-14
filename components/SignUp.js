import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';
import ButtonUseNav from '../home/ButtonUseNav';

  function SignUp() {
    return (
        <View style={styles.signUpContainer}>
        <LinGradScreen />
        <TitleText>Sign Up</TitleText>
        <View>
            <ButtonUseNav screenName='LogIn' />
        </View>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1
    }
});