import { Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from './colors';

import Home from '../components/Home';
import AboutUsBoard from '../boardaboutus/AboutUsBoard';
import LierBoard from '../components/LierBoard';
import AboutLiesBoard from '../boardaboutlies/AboutLiesBoard';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import ContactPage from '../home/ContactPage';
import MusingsBoard from '../boardmusings/MusingsBoard';
import BibleBoard from '../boardbible/BibleBoard';
import GeneralBoard from '../boardgeneral/GeneralBoard';
import MediaBoard from '../boardmedia/MediaBoard';

const Tab = createBottomTabNavigator();

function HomeBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
      tabBarStyle: {backgroundColor: Colors.primaryDblue},
      tabBarActiveTintColor: Colors.primaryWhite,
      tabBarInactiveTintColor: Colors.primaryLgreen,
      headerShown: false
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
          <Image
            style={styles.imageLtrLogoTabBarIcon}
            source={require('../assets/images/ltrbrand.png')} /> ), }} />
      <Tab.Screen
        name="AboutUs"
        component={AboutUsBoard}
        options={{
          title: 'About Us',
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="assistant" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="LierBoard"
        component={LierBoard}
        options={{
          title: 'Lier Board',
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="view-list" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="AboutLies"
        component={AboutLiesBoard}
        options={{
          title: 'About Lies',
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="book-information-variant" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="LogIn"
        component={LogIn}
        options={{
          title: 'Login',
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="login" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sign Up',
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="arrow-up-bold-box-outline" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="ContactPage"
        component={ContactPage}
        options={{
          title: 'Contact Us',
          tabBarButton: (props) => null }} />
      <Tab.Screen
        name="Musings"
        component={MusingsBoard}
        options={{ tabBarButton: (props) => null }} />
      <Tab.Screen
        name="BibleBoard"
        component={BibleBoard}
        options={{
          title: 'Bible Board',
          tabBarButton: (props) => null }} />
      <Tab.Screen
        name="GeneralBoard"
        component={GeneralBoard}
        options={{
          title: 'General Board',
          tabBarButton: (props) => null }} />
      <Tab.Screen
        name="MediaBoard"
        component={MediaBoard}
        options={{
          title: 'Media Board',
          tabBarButton: (props) => null }} />
    </Tab.Navigator>
  );
}

export default HomeBottomTab;

const styles = StyleSheet.create({
  imageLtrLogoTabBarIcon: {
    width: 30,
    height: 15
  }
});