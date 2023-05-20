import { View, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function HomeMidUseNav({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        </Pressable>
        </View>
    );
}

export default HomeMidUseNav;

const styles = StyleSheet.create({
    homeMidUseNavCont: {
        backgroundColor: 'transparent'
    }
});