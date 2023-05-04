import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './footernote';
import Contact from './contact';

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <Text style={styles.footerText}>LTR logo</Text>
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
    },
    footerText: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 35,
        color: Colors.primaryOffWhite,
        margin: 5
    }
});