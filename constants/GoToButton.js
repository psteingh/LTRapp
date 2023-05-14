import { View, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function GoToButton({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <Button title={`Go to ${screenName}`}
        onPress={()=> navigation.navigate(screenName)} />
        </View>
    );
}

export default GoToButton;

const styles = StyleSheet.create({    
});