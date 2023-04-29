import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGradScreen from '../constants/lingradscreen';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

function HomeComponent() {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        <Text style={styles.homeText}> Home </Text>
        
        <TopHead />
        <HomeMid />
        <Footer />
        </View>
    );
    }

export default HomeComponent;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    homeText: {
        fontSize: 20,
        color: Colors.primaryLblue,
        backgroundColor: 'transparent'
    },

});