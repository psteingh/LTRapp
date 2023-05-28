import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

  function ContactPage() {
    return (
        <View style={styles.contactPageContainer}>
        <LinGradScreen />
        <TextTitle>Contact Us Page</TextTitle>
        </View>
    );
}

export default ContactPage;

const styles = StyleSheet.create({
    contactPageContainer: {
        flex: 1
    }
});