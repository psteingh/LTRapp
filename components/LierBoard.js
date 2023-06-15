import { View, Text, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import Colors from '../constants/colors';
import NavLtrLogo from '../constants/NavLtrLogo';

function LierBoard() {
    return (
        <View style={styles.lierBoardContainer}>
        <LinGradScreen />
        <Text style={styles.lierBoardTitleText}>Lies made Public</Text>
        <View style={styles.navLtrLogoContainer}>
        <NavLtrLogo screenName='Home' />
        </View>
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    lierBoardContainer: {
        flex: 1
    },
    lierBoardTitleText: {
        color: Colors.primaryDgreen,
        fontSize: 15,
        fontFamily: 'LibreBaskervilleBold'
    },
    navLtrLogoContainer: {
        alignItems: 'center'
    }
});