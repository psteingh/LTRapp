import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import AboutUsBoard from '../boardaboutus/aboutusboard.component';
import LierBoard from '../components/lierboard.component';
import AboutLiesBoard from '../boardaboutlies/aboutliesboard.component';

function NavBottom() {
    return (
        <View style={styles.navBottomContainer}>
            <AboutUsBoard />
            <LierBoard />
            <AboutLiesBoard />
            <Text style={styles.navBottomText}> NavBottom </Text>
        </View>
    );
}

export default NavBottom;

const styles = StyleSheet.create({
    navBottomContainer: {
        margin: 100
    },
    navBottomText: {
        color: Colors.primaryDblue
    }
});