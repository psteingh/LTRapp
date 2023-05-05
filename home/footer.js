import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './footernote';
import Contact from './contact';

import LtrLogo from '../constants/ltrlogo';

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <LtrLogo />
            </View>
            <View>
            <Contact />
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