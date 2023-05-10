import { View, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

    function HomeComponent() {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        
        <TopHead />
        <HomeMid />

        <Button
            title="Go to Contact Page"
            onPress={() => navigation.navigate('MyTabs', {screen: 'ContactPage'})} />

        <Footer />
        
        </View>
    );
    }

export default HomeComponent;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    }
});