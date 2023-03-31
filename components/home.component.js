import { View, Text, StyleSheet } from 'react-native';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/colors';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';
// import NavBottom from '../home/navbottom';

// import AboutUsBoard from '../boardaboutus/aboutusboard.component';
// import LierBoard from '../components/lierboard.component';
// import AboutLiesBoard from '../boardaboutlies/aboutliesboard.component';

// const Stack = createNativeStackNavigator();

function HomeComponent() {
    return (

        // <Stack.Navigator>
        // <Stack.Screen name="AboutUs" component={AboutUsBoard} />
        // <Stack.Screen name="LierBoard" component={LierBoard} />
        // <Stack.Screen name="AboutLies" component={AboutLiesBoard} />

        <View style={styles.homeContainer}>
        <Text style={styles.homeText}>Home</Text>
        
        <TopHead />
        <HomeMid />
        <Footer />
        {/* <NavBottom /> */}
        
        </View>

        // </Stack.Navigator>
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