import { View, Image, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function LtrLogoUseNav({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        <Image
        style={styles.imageLtrLogoFooter}
        source={require('../assets/images/ltrbrand.png')} />
        </Pressable>
        </View>
    );
}

export default LtrLogoUseNav;

const styles = StyleSheet.create({
    imageLtrLogoFooter: {
        width: 40,
        height: 20,
        margin: 5
    }
});