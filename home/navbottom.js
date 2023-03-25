import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';

import AboutUsBoard from '../boardaboutus/aboutusboard.component';
import LierBoard from '../components/lierboard.component';
import AboutLiesBoard from '../boardaboutlies/aboutliesboard.component';

const Tab = createBottomTabNavigator();

function NavBottom() {
    return (
        // <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="AboutUs" component={AboutUsBoard} />
            <Tab.Screen name="LierBoard" component={LierBoard} />
            <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
            </Tab.Navigator>
        // </NavigationContainer>
        
        // <View style={styles.navBottomContainer}>
        // <AboutUsBoard />
        // <LierBoard />
        // <AboutLiesBoard />
        // <Text style={styles.navBottomText}> NavBottom </Text>
        // </View>
    );
}

export default NavBottom;

const styles = StyleSheet.create({
    navBottomContainer: {
        margin: 100
    },
    navBottomText: {
        color: Colors.primaryDblue
    }
});