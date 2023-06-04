import { View, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function NavHomeMid({screenName, children}) {
    const navigation = useNavigation();
    return (
        <View>
        <Pressable
            onPress={() => navigation.navigate(screenName)}>
        <View style={styles.NavHomeMidChildCont}>{children}</View>
        </Pressable>
        </View>
    );
}

export default NavHomeMid;

const styles = StyleSheet.create({
    NavHomeMidChildCont: {
        alignItems: 'center'
    }
});