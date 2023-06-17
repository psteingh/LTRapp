import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

function FooterShadow() {
    return (
        <View style={styles.footerShadowContainer}>
        <Shadow
            distance={5}
            startColor={'#7f7f7f'}
            endColor={'#b3b3b3'}
            offset={[0, 0]}>
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
    footerShadowChildContainer: {
        backgroundColor: Colors.primaryDblue,
    },
    footerShadowText: {
        color: Colors.primaryWhite,
        fontSize: 15,
        margin: 5
    }
});