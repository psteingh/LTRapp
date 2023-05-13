import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LinGradHeadTab from './constants/LinGradHeadTab';

import Home from './components/Home';
import AboutUsBoard from './boardaboutus/AboutUsBoard';
import LierBoard from './components/LierBoard';
import AboutLiesBoard from './boardaboutlies/AboutLiesBoard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ContactPage from './home/ContactPage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
      headerBackground: LinGradHeadTab,
      tabBarBackground: LinGradHeadTab
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AboutUs" component={AboutUsBoard} />
      <Tab.Screen name="LierBoard" component={LierBoard} />
      <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
      <Tab.Screen name="LogIn" component={LogIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="ContactPage" component={ContactPage}
        options={{ tabBarButton: (props) => null }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

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
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false
        }} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 });
