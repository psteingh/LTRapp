import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import NavBottom from './home/navbottom';

import Colors from './constants/colors';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'yellow',
    background: Colors.primaryDblue,
    card: Colors.primaryDgreen,
    text: 'white',
    border: 'black',
    notification: 'red',
  },
};

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>

      <NavBottom />

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
