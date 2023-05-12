import { View, Text, Pressable, StyleSheet } from 'react-native';

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

        <View style={styles.pressableContainer}>
        <Pressable
            style={styles.contactButtonContainer}
            onPress={() => navigation.navigate('MyTabs',
            {screen: 'ContactPage'})} >
        <Text style={styles.contactButtonText}>Contact Us</Text>
        </Pressable>
        </View>

        </View>
    );
    }

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    pressableContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5
    },
    contactButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    }
});