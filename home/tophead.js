import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

import CarouselBS from './CarouselBS';
import SubTitle from './SubTitle';

function TopHead() {
    return (
        <View style={styles.topHeadContainer}>
        <Shadow
            distance={2}
            startColor={'#7f7f7f'}
            offset={[2, 2]}
            style={styles.shadowCorner}>
        <View style={styles.topHeadChildContainer}>
            <Text style={styles.topHeadText}>Lies To Remember</Text>
            <View>
                <CarouselBS />
            </View>
            <View>
                <SubTitle />
            </View>
        </View>
        </Shadow>
        </View>
    );
}

export default TopHead;

const styles = StyleSheet.create({
    topHeadContainer: {
        margin: 5
    },
    shadowCorner: {
        borderRadius: 1
    },
    topHeadChildContainer: {
        backgroundColor: Colors.primaryDblue,
        paddingVertical: 1
    },
    topHeadText: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 35,
        color: Colors.primaryOffWhite,
        margin: 10
    }
});