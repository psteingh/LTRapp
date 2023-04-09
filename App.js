import { View, StyleSheet } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';

import HomeComponent from './components/home.component';
import AboutUsBoard from './boardaboutus/aboutusboard.component';
import LierBoard from './components/lierboard.component';
import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primaryLred,
    background: Colors.primaryLgreen,
    card: Colors.primaryLblue
    // background: () => (
    // <LinearGradient
    // colors={[Colors.primaryWhite, Colors.primaryBlack]}
    // start={{x: 0, y: 0}}
    // end={{x: 1, y: 0}}
    // style={styles.container} />
    // ),
  }, };

{/* <LinearGradient
    colors={[Colors.primaryWhite, Colors.primaryBlack]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.container}>
</LinearGradient> */}

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarBackground: () => (
        <LinearGradient
        colors={[Colors.primaryWhite, Colors.primaryBlack]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={styles.container}
        />
        ),
    }}>
      <Tab.Screen name="Home" component={HomeComponent} />
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
        colors={[Colors.primaryWhite, Colors.primaryBlack]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}/>
    
    <MyTabs />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
