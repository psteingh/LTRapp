import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import NavBottom from './home/navbottom';

import Colors from './constants/colors';

export default function App() {

  return (
    <NavigationContainer>

      {/* <View>
        <Text>Start screen</Text>
      </View> */}

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
