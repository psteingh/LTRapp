import { View, Image, Pressable, StyleSheet } from 'react-native';

import LtrLogoUseNav from '../constants/LtrLogoUseNav';

import { useNavigation } from '@react-navigation/native';

function AboutUsNav({screenName}) {
    const navigation = useNavigation();
    return (
        <View>
        <View>
        <LtrLogoUseNav screenName='Home' />
        </View>
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        <Image
        style={styles.imageLtrLogoUseNav}
        source={require('../assets/images/ltrbrand.png')} />
        </Pressable>
        </View>
        </View>
    );
}

export default AboutUsNav;

const styles = StyleSheet.create({
    imageLtrLogoUseNav: {
        width: 40,
        height: 20,
        margin: 5
    }
});