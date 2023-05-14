import { Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function GoToButton({screenName}) {
    const navigation = useNavigation();
    return (
        <Button title={`Go to ${screenName}`}
        onPress={()=> navigation.navigate(screenName)}
        style={styles.goToButtonContainer} />
    );
}

export default GoToButton;

const styles = StyleSheet.create({
    goToButtonContainer: {
        margin: 5,
        backgroundColor: Colors.primaryLgreen
    }
});