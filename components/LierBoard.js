import { View, Text, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import Colors from '../constants/colors';
import NavLtrLogo from '../constants/NavLtrLogo';

function LierBoard() {
    const LBName = ['TestName']
    const LBSubject = ['TestSubject']

    return (
        <View style={styles.lierBoardContainer}>
        <LinGradScreen />
        <Text style={styles.lierBoardTitleText}>Lies made Public</Text>
        <View style={styles.lierBoardListContainer}>
            <View style={styles.lierBoardNameContainer}>
                <Text>Name:</Text>
            </View>
            <View style={styles.lierBoardSubjectContainer}>
                <Text>Subject:</Text>
            </View>
        </View>
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
        fontFamily: 'LibreBaskervilleBold',
        margin: 25
    },
    lierBoardListContainer: {
        margin: 5,
        padding: 5,
        backgroundColor: Colors.primaryWhite,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3
    },
    lierBoardNameContainer: {
        backgroundColor: Colors.primaryYellow
    },
    lierBoardSubjectContainer: {
        backgroundColor: Colors.primaryYellow
    },
    navLtrLogoContainer: {
        alignItems: 'center'
    }
});