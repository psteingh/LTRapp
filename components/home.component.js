import { View, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

function ContactScreen({navigation}) {
    return (
        <View>
            <Button
                title="Testing"
                onPress={() => navigation.navigate('Contact') } />
        </View>
    )}

function HomeComponent() {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        
        <TopHead />
        <HomeMid />
        <Footer />
        <ContactScreen />
        </View>
    );
    }

export default HomeComponent;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    }
});