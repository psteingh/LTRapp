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
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="assistant" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="LierBoard"
        component={LierBoard}
        options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="view-list" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="AboutLies"
        component={AboutLiesBoard}
        options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="book-information-variant" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="LogIn"
        component={LogIn}
        options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="login" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="arrow-up-bold-box-outline" color={color} size={size}/> ), }} />
      <Tab.Screen
        name="ContactPage"
        component={ContactPage}
        options={{ tabBarButton: (props) => null }} />
      <Tab.Screen
        name="Musings"
        component={MusingsBoard}
        options={{ tabBarButton: (props) => null }} />
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