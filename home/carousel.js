import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function Carousel() {
    return (
        <View style={styles.carouselContainer}>
            <Text style={styles.carouselText}>When did I tell them a Lie?</Text>
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        backgroundColor: 'transparent',
        margin: 5
    },
    carouselText: {
        fontFamily: 'RobotoBold',
        fontSize: 25,
        color: Colors.primaryWhite,
        margin: 5
    }
});