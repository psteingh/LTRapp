import { View, StyleSheet } from 'react-native';

import LtrLogoUseNav from '../constants/LtrLogoUseNav';

function AboutUsNav() {
    return (
        <View style={styles.aboutNavContainer}>
        <View style={styles.aboutNavChildContainer}>
        <LtrLogoUseNav screenName='Home' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <LtrLogoUseNav screenName='LierBoard' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <LtrLogoUseNav screenName='AboutLies' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <LtrLogoUseNav screenName='ContactPage' />
        </View>
        </View>
    );
}

export default AboutUsNav;

const styles = StyleSheet.create({
    aboutNavContainer: {
        margin: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'green'
    },
    aboutNavChildContainer: {
        flex: 1.5,
        marginVertical: 5
    }
});