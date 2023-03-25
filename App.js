import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeComponent from './components/home.component';
import NavBottom from './home/navbottom';

import AboutUsBoard from './boardaboutus/aboutusboard.component';
import LierBoard from './components/lierboard.component';
import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

import Colors from './constants/colors';

const Tab = createBottomTabNavigator();

function NavBot() {
    return (
        // <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="AboutUs" component={AboutUsBoard} />
            <Tab.Screen name="LierBoard" component={LierBoard} />
            <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
            </Tab.Navigator>
    );
    }

export default function App() {
  return (
    <NavigationContainer>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        style={styles.container}
        >
      <View>
      <HomeComponent />
      </View>
      <View>
        <NavBot />
      </View>
      <View>
        <NavBottom />
      </View>
      </LinearGradient>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
