import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function Carousel() {
    return (
        <View style={styles.carouselContainer}>
            <Text style={styles.carouselText}>Carousel</Text>
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        backgroundColor: 'transparent'
    },
    carouselText: {
        fontFamily: 'RobotoBold',
        fontSize: 25,
        color: Colors.primaryWhite
    }
});