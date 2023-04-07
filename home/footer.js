import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function Footer() {
    return (
        <View>
            <Text style={styles.footerText}> Footer </Text>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerText: {
        color: Colors.primaryDred
    }
});