import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import Carousel from './carousel';
import SubTitle from './subtitle';

function TopHead() {
    return (
        <View style={styles.topHeadContainer}>
            <Text style={styles.topHeadText}>Lies To Remember</Text>
            <View>
                <Carousel />
            </View>
            <View>
                <SubTitle />
            </View>
        </View>
    );
}

export default TopHead;

const styles = StyleSheet.create({
    topHeadContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center'
    },
    topHeadText: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 45,
        color: Colors.primaryOffWhite,
    }
});