import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

function FooterShadow() {
    return (
        <Shadow
            distance={10}
            startColor={'#7f7f7f'}
            offset={[0, 0]}>
        <View style={styles.footerShadowContainer}>
        <Text style={styles.footerShadowText}>Footer Shadow</Text>
        </View>
        </Shadow>
    );
}

export default FooterShadow;

const styles = StyleSheet.create({
    footerShadowContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        margin: 5
    },
    footerShadowText: {
        color: Colors.primaryWhite
    }
});