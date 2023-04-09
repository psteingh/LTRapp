import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import LinGrad from '../constants/lingrad';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

function HomeComponent() {
    return (
        <LinGrad>
        <View style={styles.homeContainer}>
        <Text style={styles.homeText}>Home</Text>
        
        <TopHead />
        <HomeMid />
        <Footer />
        </View>
        </LinGrad>

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