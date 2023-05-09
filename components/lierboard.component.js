import { View, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

function LierBoard({navigation}) {
    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>Lier Board</TitleText>
        <Button
            title="Go to Contact Page"
            onPress={() => navigation.navigate('MyTabs', {screen: 'ContactPage'})} />
        </View>
    );
}

export default LierBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});