import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeComponent from './components/home.component';

// import AboutUsBoard from './boardaboutus/aboutusboard.component';
// import LierBoard from './components/lierboard.component';
// import AboutLiesBoard from './boardaboutlies/aboutliesboard.component';

import Colors from './constants/colors';

// const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        style={styles.container}
        >
      
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="AboutUs" component={AboutUsBoard} />
        <Stack.Screen name="LierBoard" component={LierBoard} />
        <Stack.Screen name="AboutLies" component={AboutLiesBoard} />
      </Stack.Navigator> */}

      <HomeComponent />

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
