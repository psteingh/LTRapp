import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

  function ContactPage() {
    return (
        <View style={styles.contactPageContainer}>
        <LinGradScreen />
        <TitleText>Contact Us Page</TitleText>
        </View>
    );
}

export default ContactPage;

const styles = StyleSheet.create({
    contactPageContainer: {
        flex: 1
    }
});