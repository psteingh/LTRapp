import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from './constants/colors';
import LinGrad from './constants/lingrad';

import HomeComponent from './components/home.component';
import AboutUsBoard from './boardaboutus/aboutusboard.component';
import LierBoard from './components/lierboard.component';
import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator

      // sceneContainerStyle={{backgroundColor: Colors.primaryLgreen}}
    
      screenOptions={{
      headerBackground: LinGrad,
      tabBarBackground: LinGrad
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
