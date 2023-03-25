import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';

import AboutUsBoard from '../boardaboutus/aboutusboard.component';
import LierBoard from '../components/lierboard.component';
import AboutLiesBoard from '../boardaboutlies/aboutliesboard.component';

const Tab = createBottomTabNavigator();

function NavBottom() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="AboutUs"
                component={AboutUsBoard}
                options={{
                    title: "About Us"
                }}
            />
            
            <Tab.Screen name="LierBoard" component={LierBoard} />
            <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
        </Tab.Navigator>
        
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