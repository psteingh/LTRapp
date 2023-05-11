import { View, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';

import TopHead from '../home/TopHead';
import HomeMid from '../home/HomeMid';
import Footer from '../home/Footer';

    function Home({navigation}) {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        
        <TopHead />
        <HomeMid />
        <Footer />

        <Button
            title="MT CP"
            onPress={() => navigation.navigate('MyTabs',
            { screen: 'ContactPage' }) } />

        </View>
    );
    }

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    }
});