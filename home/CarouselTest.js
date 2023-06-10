import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function CarouselTest() {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.carouselContainer}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(3).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View style={styles.carouselTextContainer}>
                        <Text style={styles.carouselText}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default CarouselTest;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1
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
        fontSize: 10,
        color: 'white'
    }
});