import { View, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './footernote';
import ContactButton from './ContactButton';

import LtrLogoFooter from '../constants/ltrlogofooter';

function Footer({navigation}) {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <LtrLogoFooter />
            </View>
            <Button
                title="FB Go to Contact Page"
                onPress={() => navigation.navigate('MyTabs',
                {screen: 'HomeComponent', params: {screen: 'ContactPage'}})} />
            <View>
            <ContactButton />
            </View>

        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        margin: 5
    }
});