import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Colors from '../constants/colors';

function CarouselBS() {
    const width = Dimensions.get('window').width;

    const CarItem = [
        'When did I tell them a Lie?',
        'Did I tell them a Lie?',
        'What Lie did I tell them?',
        'Why did I tell them a Lie?']
    
    return (
        <View style={styles.carouselContainer}>
        <Carousel
            loop
            width={width * 0.9}
            height={width / 8}
            autoPlay={false}
            data={CarItem}
            scrollAnimationDuration={5000}
            renderItem={({item}) => (
            <View style={styles.carouselTextContainer}>            
            <Text style={styles.carouselText}>{item}</Text>
            </View>
            )}
        />
        </View>
    );
}

export default CarouselBS;

const styles = StyleSheet.create({
    carouselContainer: {
        marginTop: 10
    },
    carouselTextContainer: {
        borderWidth: .5,
        borderColor: 'black'
    },
    carouselText: {
        textAlign: 'center',
        fontFamily: 'RobotoBold',
        fontSize: 25,
        color: Colors.primaryWhite
    }
});