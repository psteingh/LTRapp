import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import  { LinearGradient } from 'expo-linear-gradient';

import NavBottom from './home/navbottom';

import Colors from './constants/colors';

export default function App() {

  return (
    <NavigationContainer>
      <LinearGradient
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        start={{x: 0, y: 1}}
        end={{x: 0, y:0}} >

      {/* <View>
        <Text>Start screen</Text>
      </View> */}

      <NavBottom />

      </LinearGradient>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
