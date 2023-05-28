import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';

import TopHead from '../home/TopHead';
import HomeMid from '../home/HomeMid';
import Footer from '../home/Footer';

    function Home() {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        <View style={styles.homeSubContainer}>        
        <TopHead />
        <HomeMid />
        <Footer />
        </View>
        </View>
    );
    }

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    homeSubContainer: {
        marginTop: 30
    }
});