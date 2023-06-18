import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

function FooterShadow() {
    return (
        <View style={styles.footerShadowContainer}>
        <Shadow
            distance={2}
            startColor={'#7f7f7f'}
            offset={[2, 2]}
            style={styles.shadowCorner}>
        <View style={styles.footerShadowChildContainer}>
        <Text style={styles.footerShadowText}>Footer Shadow</Text>
        </View>
        </Shadow>
        </View>
    );
}

export default FooterShadow;

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
    },
    footerShadowText: {
        color: Colors.primaryWhite,
        fontSize: 15,
        margin: 5
    }
});