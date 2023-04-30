import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LinGradHeadTab from './constants/lingradheadtab';

import HomeComponent from './components/home.component';
import AboutUsBoard from './boardaboutus/aboutusboard.component';
import LierBoard from './components/lierboard.component';
import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
      headerBackground: LinGradHeadTab,
      tabBarBackground: LinGradHeadTab
    }}>
      <Tab.Screen name="Home" component={HomeComponent} />
      <Tab.Screen name="AboutUs" component={AboutUsBoard} />
      <Tab.Screen name="LierBoard" component={LierBoard} />
      <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    LibreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf')
  });
    if (!loaded) {
      return null; }
  
  return (
    <NavigationContainer>
    <View>
      <Text style={styles.libreBaskerville}>Libre Baskerville Test</Text>
    </View>
    <MyTabs />        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  libreBaskerville: {
    fontFamily: 'LibreBaskerville'
  }
 });
