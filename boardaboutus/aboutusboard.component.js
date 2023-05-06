import { View, Text, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

// function HomeScreen({navigation}) {
//     return (
//         <View>
//         <View>
//           <Text>Homes Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details') } />
//         </View>
//         <View>
//           <Text>Details Screen</Text>
//           <Button
//             title="Go to Test"
//             onPress={() => navigation.navigate('Test') } />
//         </View>
//         </View>
//     )}
  
//   function DetailScreen({navigation}) {
//     return (
//         <View>
//           <Text>Details Screen</Text>
//           <Button
//             title="Go to Test"
//             onPress={() => navigation.navigate('Test') } />
//         </View>
//     )}
  
  function TestScreen({navigation}) {
      return (
          <View>
            <Text>Test Screen</Text>
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home') } />
          </View>
    )}


function AboutUsBoard() {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>About Us Board</TitleText>
        <TestScreen />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});