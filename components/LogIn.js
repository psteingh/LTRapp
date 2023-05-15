import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';
import ButtonUseNav from '../home/ButtonUseNav';

  function LogIn() {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TitleText>Log In</TitleText>
        <View style={styles.logInButtonUseNavCont}>
            <ButtonUseNav screenName='SignUp' />
        </View>
        </View>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    logInContainer: {
        flex: 1
    },
    logInButtonUseNavCont: {
        marginHorizontal: 5,
        alignItems: 'center'
    }
});