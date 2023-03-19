import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

function HomeComponent() {
    return (
        <View>
            <Text style={styles.homeText}>Home</Text>
            <TopHead />
            <HomeMid />
            <Footer />
        </View>
    );
}

export default HomeComponent;

const styles = StyleSheet.create({
    homeText: {
        color: Colors.primaryLblue
    }
});