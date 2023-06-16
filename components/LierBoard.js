import { View, Text, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import Colors from '../constants/colors';
import NavLtrLogo from '../constants/NavLtrLogo';

function LierBoard() {
    const LBName = ['TestName']
    const LBSubject = ['TestSubject']
    const LBStuff = ['TestStuff']

    return (
        <View style={styles.lierBoardContainer}>
        <LinGradScreen />
        <Text style={styles.lierBoardTitleText}>Lies made Public</Text>
        <View style={styles.lierBoardListContainer}>
            <View style={styles.lierBoardNameContainer}>
                <Text>Name: {LBName}</Text>
            </View>
            <View style={styles.lierBoardSubjectContainer}>
                <Text>Subject: {LBSubject}</Text>
            </View>
            <View style={styles.lierBoardStuffContainer}>
                <Text>Stuff: {LBStuff}</Text>
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
        backgroundColor: 'rgba(233, 236, 71, 0.5)'
    },
    lierBoardSubjectContainer: {
        backgroundColor: 'rgba(233, 236, 71, 0.7)'
    },
    lierBoardStuffContainer: {
        backgroundColor: 'rgba(233, 236, 71, 0.9)'
    },
    navLtrLogoContainer: {
        alignItems: 'center'
    }
});