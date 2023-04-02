import { StyleSheet, View, Text } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import NavBottom from './home/navbottom';

import Colors from './constants/colors';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'red',
    background: 'blue',
    card: 'green',
    text: 'white',
    border: 'black',
    notification: 'yellow',
  },
};

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
      {/* <LinearGradient
        colors={[Colors.primaryBlack, Colors.primaryWhite]}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={styles.container}> */}
      
      <NavBottom />
      
      {/* </LinearGradient> */}

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
