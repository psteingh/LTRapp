import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function HomeMid() {
    return (
        <View>
            <Text style={styles.homeMidText}> HomeMid </Text>
        </View>
    );
}

export default HomeMid;

const styles = StyleSheet.create({
    homeMidText: {
        color: Colors.primaryLgreen
    }
});