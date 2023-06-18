import { View, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

import FooterNote from './FooterNote';
import NavLtrLogo from '../constants/NavLtrLogo';
import NavContact from '../constants/NavContact';

function Footer() {
    return (
        <Shadow
            distance={2}
            startColor={'#7f7f7f'}
            offset={[2, 2]}
            style={styles.shadowCorner}>
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
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        margin: 5
    },
    shadowCorner: {
        borderRadius: 1
    }
});