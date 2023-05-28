import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';
import ButtonUseNav from '../constants/ButtonUseNav';

  function LogIn() {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TextTitle>Log In</TextTitle>
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