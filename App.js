import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';

import HomeComponent from './components/home.component';
import AboutUsBoard from './boardaboutus/aboutusboard.component';
import LierBoard from './components/lierboard.component';
import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

{/* <LinearGradient
  colors={[Colors.primaryBlack, Colors.primaryWhite]}
  start={{x: 0, y: 1}}
  end={{x: 0, y: 0}}> */}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeComponent} />
      <Tab.Screen name="AboutUs" component={AboutUsBoard} />
      <Tab.Screen name="LierBoard" component={LierBoard} />
      <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
    </Tab.Navigator>
  );
}

export default function App() {
  const navTheme = {
    colors: {
      background: Colors.primaryLgreen
    }
  };

  return (
    <NavigationContainer theme={navTheme}>
        
      <MyTabs />
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  tabColor: {
    background: Colors.primaryDgreen
  },
  linGrad: {
    width: '100%',
    height: '100%'
  }
});
