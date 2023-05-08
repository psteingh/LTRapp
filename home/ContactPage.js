import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

  function ContactPage() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>Contact Us Page</TitleText>
        </View>
    );
}

export default ContactPage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});