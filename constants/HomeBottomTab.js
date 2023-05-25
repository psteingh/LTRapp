import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from './colors';
import LinGradHeadTab from './LinGradHeadTab';

import Home from '../components/Home';
import AboutUsBoard from '../boardaboutus/AboutUsBoard';
import LierBoard from '../components/LierBoard';
import AboutLiesBoard from '../boardaboutlies/AboutLiesBoard';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import ContactPage from '../home/ContactPage';

const Tab = createBottomTabNavigator();
const Icon = MaterialCommunityIcons();

function HomeBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
      headerTintColor: Colors.primaryYellow,
      headerBackground: LinGradHeadTab,
      tabBarStyle: {backgroundColor: Colors.primaryDblue},
      tabBarActiveTintColor: Colors.primaryWhite,
      tabBarInactiveTintColor: Colors.primaryYellow
      
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="AboutUs"
        component={AboutUsBoard}
        options={{
          tabBarIcon: () => (<Icon name="assistant"/>),
        }} />
      <Tab.Screen name="LierBoard" component={LierBoard} />
      <Tab.Screen name="AboutLies" component={AboutLiesBoard} />
      <Tab.Screen name="LogIn" component={LogIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="ContactPage" component={ContactPage}
        options={{ tabBarButton: (props) => null }} />
    </Tab.Navigator>
  );
}

export default HomeBottomTab;