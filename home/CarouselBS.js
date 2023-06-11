import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Colors from '../constants/colors';

class Category{
    constructor(id, title){
        this.id = id;
        this.title = title;
    }}

function CarouselBS() {
    const width = Dimensions.get('window').width;

    const CATEGORIES = [
        new Category('1', 'When'),
        new Category('2', 'Did'),
        new Category('3', 'What'),
        new Category('4', 'Why'),
    ];
    
    return (
        <View style={styles.carouselContainer}>
        <Carousel
            loop
            width={width}
            height={width / 3}
            autoPlay={true}
            data={[...new Array(4).keys()]}
            scrollAnimationDuration={3000}

            onSnapToItem={(index) => console.log(index, CATEGORIES)}
            
            renderItem={({index}) => (
            <View>
            <View style={styles.carouselTextContainer}>            
            <Text style={styles.carouselText}>{index}</Text>
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