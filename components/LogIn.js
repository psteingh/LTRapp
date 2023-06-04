import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';
import NavButton from '../constants/NavButton';

  function LogIn() {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TextTitle>Log In</TextTitle>
        <View style={styles.logInNavButtonCont}>
            <NavButton screenName='SignUp' />
        </View>
        </View>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    logInContainer: {
        flex: 1
    },
    logInNavButtonCont: {
        marginHorizontal: 5,
        alignItems: 'center'
    }
});