import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function LogIn() {
    return (
        <View style={styles.logInContainer}>
        <LinGradScreen />
        <TitleText>Login</TitleText>
        </View>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    logInContainer: {
        flex: 1
    }
});