import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function SignUp() {
    return (
        <View style={styles.signUpContainer}>
        <LinGradScreen />
        <TitleText>Sign Up</TitleText>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1
    }
});