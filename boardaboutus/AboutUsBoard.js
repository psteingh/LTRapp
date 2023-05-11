import { View, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function AboutUsBoard({navigation}) {
    return (
        <View style={styles.container}>
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
    container: {
        flex: 1
    }
});