import { Pressable, View, Text, StyleSheet } from 'react-native';

function ContactTile({onPress}) {
    return (
        <View style={styles.gridItem}>
        <Pressable
            style={({ pressed }) => [styles.button,
                pressed ? styles.buttonPressed : null,]}
                onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Contact Tile</Text>
            </View>
        </Pressable>
        </View>
    );
}

export default ContactTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 4,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});