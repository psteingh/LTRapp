import { View, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function HomeMidUseNav({screenName, children}) {
    const navigation = useNavigation();
    return (
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        <View style={styles.homeMidUseNavChildCont}>{children}</View>
        </Pressable>
        </View>
    );
}

export default HomeMidUseNav;

const styles = StyleSheet.create({
    homeMidUseNavChildCont: {
        alignItems: 'center'
    }
});