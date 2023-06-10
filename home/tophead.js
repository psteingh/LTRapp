import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import Carousel from './Carousel';
import SubTitle from './SubTitle';

import CarouselTest from './CarouselTest';

function TopHead() {
    return (
        <View style={styles.topHeadContainer}>
            <Text style={styles.topHeadText}>Lies To Remember</Text>
            <View>
                <Carousel />
            </View>
            <View>
                <CarouselTest />
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
        alignItems: 'center',
        margin: 5
    },
    topHeadText: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 35,
        color: Colors.primaryOffWhite,
        margin: 5
    }
});