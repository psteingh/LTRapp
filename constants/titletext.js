import { View, Text, StyleSheet } from 'react-native';

function TitleText() {
    return (
        <View>
            <Text style={styles.titleText}></Text>
        </View>
    );
}

export default TitleText;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        color: Colors.primaryLred,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colors.primaryLgreen,
        margin: 10,
        padding: 20,
    }
});