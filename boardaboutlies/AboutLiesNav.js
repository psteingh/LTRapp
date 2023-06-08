import { View, StyleSheet } from 'react-native';

import NavLtrLogo from '../constants/NavLtrLogo';
import NavButton from '../constants/NavButton';

function AboutLiesNav() {
    return (
        <View style={styles.aboutNavContainer}>
        <View style={styles.aboutNavChildContainer}>
        <NavLtrLogo screenName='Home' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='AboutLies'
            screenTitle='About Lies' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='General'
            screenTitle='General' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='Bible'
            screenTitle='Bible' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='Media'
            screenTitle='Media' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='ContactPage'
            screenTitle='Contact Us' />
        </View>
        </View>
    );
}

export default AboutLiesNav;

const styles = StyleSheet.create({
    aboutNavContainer: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'green'
    },
    aboutNavChildContainer: {
        margin: 2,
    }
});