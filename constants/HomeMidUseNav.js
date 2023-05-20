import { View, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import { useNavigation } from '@react-navigation/native';

function HomeMidUseNav({screenName, children}) {
    const navigation = useNavigation();
    return (
        <View style={styles.homeMidUseNavCont}>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        <View style={styles.homeMidUseNavChildCont}>{children}</View>
        </Pressable>
        </View>
    );
}

export default HomeMidUseNav;

const styles = StyleSheet.create({
    homeMidUseNavCont: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primaryLblue
    },
    homeMidUseNavChildCont: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primaryLgreen
    }
});