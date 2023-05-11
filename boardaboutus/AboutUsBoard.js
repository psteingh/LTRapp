import { View, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/LinGradScreen';
import TitleText from '../constants/TitleText';

function AboutUsBoard({navigation}) {
    return (
        <View style={styles.aboutUsBoardContainer}>
        <LinGradScreen />
        <TitleText>About Us Board</TitleText>
        <Button
            title="Go to About Lies"
            onPress={() => navigation.navigate("AboutLies")} />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    aboutUsBoardContainer: {
        flex: 1
    }
});