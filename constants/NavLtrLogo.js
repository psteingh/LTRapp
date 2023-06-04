import { View, Image, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function NavLtrLogo({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        <Image
        style={styles.imageNavLtrLogo}
        source={require('../assets/images/ltrbrand.png')} />
        </Pressable>
        </View>
    );
}

export default NavLtrLogo;

const styles = StyleSheet.create({
    imageNavLtrLogo: {
        width: 40,
        height: 20,
        margin: 5
    }
});