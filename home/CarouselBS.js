import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Colors from '../constants/colors';

function CarouselBS() {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.carouselContainer}>
        <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(4).keys()]}
            scrollAnimationDuration={1000}
            
            // onSnapToItem={(index) => console.log('current index:', index)}
            
            renderItem={() => (
            <View style={styles.carouselTextContainer}>
            {/* <Text style={styles.carouselText}>{index}</Text> */}
            
            <Text style={styles.carouselText}>When did I tell them a Lie?</Text>
            <Text style={styles.carouselText}>Did I tell them a Lie?</Text>
            <Text style={styles.carouselText}>What Lie did I tell them?</Text>
            <Text style={styles.carouselText}>Why did I tell them a Lie?</Text>
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
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'yellow'
    },
    carouselText: {
        margin: 5,
        textAlign: 'center',
        fontFamily: 'RobotoBold',
        fontSize: 20,
        color: Colors.primaryWhite
    }
});