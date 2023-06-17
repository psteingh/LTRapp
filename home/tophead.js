import { View, Text, StyleSheet } from 'react-native';
// import { Shadow } from 'react-native-shadow-2';

import Colors from '../constants/colors';

import CarouselBS from './CarouselBS';
import SubTitle from './SubTitle';

function TopHead() {
    return (
        // <Shadow
        //     distance={5}
        //     startColor={'#eb9066d8'}
        //     endColor={'#ff00ff10'}
        //     offset={[10, 4]}>
        <View style={styles.topHeadContainer}>
            <Text style={styles.topHeadText}>Lies To Remember</Text>
            <View>
                <CarouselBS />
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
        margin: 5,
    },
    topHeadText: {
        fontFamily: 'LibreBaskervilleBold',
        fontSize: 35,
        color: Colors.primaryOffWhite,
        margin: 5
    }
});