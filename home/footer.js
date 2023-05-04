import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerChildContainer}>
            <Text style={styles.footerText}>Note</Text>
            </View>
            <View style={styles.footerChildContainer}>
            <Text style={styles.footerText}>LTR logo</Text>
            </View>
            <View style={styles.footerChildContainer}>
            <Text style={styles.footerText}>Contact Us</Text>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.primaryDblue
    },
    footerChildContainer: {
        flex: 2,
        borderWidth: 1,
        borderColor: Colors.primaryLred,
        alignItems: 'center'
    },
    footerText: {
        color: Colors.primaryDred
    }
});