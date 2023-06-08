import { View, StyleSheet } from 'react-native';

import NavLtrLogo from '../constants/NavLtrLogo';
import NavButton from '../constants/NavButton';

function AboutUsNav() {
    return (
        <View style={styles.aboutNavContainer}>
        <View style={styles.aboutNavChildContainer}>
        <NavLtrLogo screenName='Home' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='AboutUs'
            screenTitle='About Us' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='Musings'
            screenTitle='Musings' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavButton
            screenName='ContactPage'
            screenTitle='Contact Us' />
        </View>
        </View>
    );
}

export default AboutUsNav;

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