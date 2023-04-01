import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

function HomeComponent() {
    return (

        <View style={styles.homeContainer}>
        <Text style={styles.homeText}>Home</Text>
        
        <TopHead />
        <HomeMid />
        <Footer />

        </View>

    );
    }

export default HomeComponent;

const styles = StyleSheet.create({
    homeContainer: {
        margin: 100
    },
    homeText: {
        color: Colors.primaryLblue
    },

});