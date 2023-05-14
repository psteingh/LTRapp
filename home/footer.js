import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './FooterNote';
import LtrLogoFooter from '../constants/LtrLogoFooter';
import ContactButton from './ContactButton';

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <LtrLogoFooter />
            </View>
            <View>
            <ContactButton screenName='ContactPage' />
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        marginHorizontal: 5,
        marginTop: 5
    }
});