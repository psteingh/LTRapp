import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TextTitle from '../constants/TextTitle';

import NavLtrLogo from '../constants/NavLtrLogo';

function LierBoard() {
    return (
        <View style={styles.lierBoardContainer}>
        <LinGradScreen />
        <TextTitle>Lier Board</TextTitle>
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
    navLtrLogoContainer: {
        alignItems: 'center'
    }
});