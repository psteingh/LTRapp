import { View, Text, Button, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

import ContactTile from '../constants/ContactTile';

function AboutUsBoard({navigation}) {
    function renderContactItem() {
        function pressHandler() {
            navigation.navigate('AboutLies');
        }

    return (
        <ContactTile
            onPress={pressHandler} />
    );
    }

    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>About Us Board</TitleText>
        <Button
            title="Testing"
            renderItem={renderContactItem} />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});