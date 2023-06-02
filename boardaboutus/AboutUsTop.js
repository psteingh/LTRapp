import { View, StyleSheet } from 'react-native';

import TextImage from '../constants/TextImage';
import TextTop from '../constants/TextTop';

function AboutUsTop() {
    return (
        <View style={styles.boardTopContainer}>
            <TextImage>Title</TextImage>
            <TextTop>Mid</TextTop>
            <TextTop>Bottom</TextTop>
        </View>
    );
}

export default AboutUsTop;

const styles = StyleSheet.create({
    boardTopContainer: {
        alignItems: 'center',
    }
});