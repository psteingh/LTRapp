import { View, Image, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './colors';

function LtrLogoUseNav({screenName}) {
    const navigation = useNavigation();
    return (
        <View style={styles.pressableContainer}>
        <Pressable
            onPress={() => navigation.navigate(screenName)}
            style={styles.contactButtonContainer}>
        <Image
        style={styles.imageLtrLogoFooter}
        source={require('../assets/images/ltrbrand.png')} />
        </Pressable>
        </View>
    );
}

export default LtrLogoUseNav;

const styles = StyleSheet.create({
    pressableContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        borderRadius: 5,
        margin: 5
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5
    },
    imageLtrLogoFooter: {
        width: 20,
        height: 10,
        margin: 2
    }

});