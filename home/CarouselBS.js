import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Colors from '../constants/colors';

function CarouselBS() {
    const width = Dimensions.get('window').width;

    const CarItem = [
        'When did',
        'Did',
        'What did',
        'Why did']
    
    return (
        <View style={styles.carouselContainer}>
        <Carousel
            loop
            width={width}
            height={width / 3}
            autoPlay={true}
            data={CarItem}
            scrollAnimationDuration={5000}

            // onSnapToItem={(index) => console.log(index)}
            
            renderItem={item => (
            <View>
            <View style={styles.carouselTextContainer}>            
            <Text style={styles.carouselText}>{item}</Text>
            </View>
            <View style={styles.carouselTextContainer}>
            <Text style={styles.carouselText}></Text>
            </View>

            {/* <Text style={styles.carouselText}>
                When did I tell them a Lie?</Text>
            <Text style={styles.carouselText}>
                Did I tell them a Lie?</Text>
            <Text style={styles.carouselText}>
                What Lie did I tell them?</Text>
            <Text style={styles.carouselText}>
                Why did I tell them a Lie?</Text> */}

            </View>
            )}
        />
        </View>
    );
}

export default CarouselBS;

const styles = StyleSheet.create({
    carouselContainer: {
        backgroundColor: 'transparent',
        margin: 5
    },
    carouselTextContainer: {
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5
    },
    carouselText: {
        margin: 2,
        textAlign: 'center',
        fontFamily: 'RobotoBold',
        fontSize: 15,
        color: Colors.primaryWhite
    }
});