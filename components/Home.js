import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import LinGradScreen from '../constants/LinGradScreen';

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

        {/* <View style={styles.contactButtonContainer}> */}
        {/* <Text style={styles.contactButtonText}>Contact Us</Text> */}
        <Button
            title="Go to Contact Page"
            onPress={() => navigation.navigate('MyTabs',
            {screen: 'ContactPage'})}
            style={styles.contactButton} />

        </View>
    );
    }

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    contactButton: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5,
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.primaryDgreen
    },
    contactButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});