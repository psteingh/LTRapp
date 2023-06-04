import { View, StyleSheet } from 'react-native';

import NavLtrLogo from '../constants/NavLtrLogo';

function AboutUsNav() {
    return (
        <View style={styles.aboutNavContainer}>
        <View style={styles.aboutNavChildContainer}>
        <NavLtrLogo screenName='Home' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavLtrLogo screenName='LierBoard' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavLtrLogo screenName='AboutLies' />
        </View>
        <View style={styles.aboutNavChildContainer}>
        <NavLtrLogo screenName='ContactPage' />
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