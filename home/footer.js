import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './FooterNote';
import NavLtrLogo from '../constants/NavLtrLogo';
import NavContact from '../constants/NavContact';

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <NavLtrLogo screenName='ContactPage' />
            </View>
            <View>
            <NavContact
                screenName='LierBoard'
                screenTitle='Lier Board' />
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