import { View, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

import FooterNote from './FooterNote';
import NavLtrLogo from '../constants/NavLtrLogo';
import NavContact from '../constants/NavContact';

function Footer() {
    return (
        <View style={styles.footerOverallContainer}>
        <Shadow
            distance={10}
            startColor={'#7f7f7f'}
            offset={[0, 0]}>
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <NavLtrLogo screenName='ContactPage' />
            </View>
            <View>
            <NavContact
                screenName='ContactPage'
                screenTitle='Contact Us' />
            </View>
        </View>
        </Shadow>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerOverallContainer: {
        margin: 5
    },
    footerContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
    }
});