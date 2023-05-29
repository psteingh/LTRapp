import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';

import TopHead from '../home/TopHead';
import HomeMid from '../home/HomeMid';
import Footer from '../home/Footer';

    function Home() {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        <TopHead />
        <HomeMid />
        <Footer />
        </View>
    );
    }

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    }
});