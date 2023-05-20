import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './FooterNote';
import LtrLogoUseNav from '../constants/LtrLogoUseNav';
import ButtonUseNav from '../constants/ButtonUseNav';

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <LtrLogoUseNav screenName='ContactPage' />
            </View>
            <View>
            <ButtonUseNav screenName='ContactPage' />
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