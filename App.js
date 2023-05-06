import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LinGradHeadTab from './constants/lingradheadtab';

import HomeComponent from './components/home.component';
import AboutUsBoard from './boardaboutus/aboutusboard.component';
import LierBoard from './components/lierboard.component';
import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contact from './home/contact';

const Stack = createNativeStackNavigator();

function ContactScreen({navigation}) {
  return (
      <View>
          <Text>Contact test</Text>
          <Button
              title="Testing"
              onPress={() => navigation.navigate('Contact') } />
      </View>
  )
}

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
    LibreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    LibreBaskervilleBold: require('./assets/fonts/LibreBaskerville-Bold.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf')
  });
    if (!loaded) {return null;}
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 });
