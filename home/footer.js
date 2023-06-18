import { View, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

import FooterNote from './FooterNote';
import NavLtrLogo from '../constants/NavLtrLogo';
import NavContact from '../constants/NavContact';

function Footer() {
    return (
        <View style={styles.footerShadowContainer}>
        <Shadow
            distance={2}
            startColor={'#7f7f7f'}
            offset={[2, 2]}
            style={styles.shadowCorner}>
        <View style={styles.footerShadowChildContainer}>
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
    footerShadowContainer: {
        alignItems: 'center',
        margin: 5
    },
    shadowCorner: {
        borderRadius: 1
    },
    footerShadowChildContainer: {
        backgroundColor: Colors.primaryDblue,
    }
});