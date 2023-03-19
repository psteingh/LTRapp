import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function HomeComponent() {
    return (
        <View>
            <Text style={styles.homeText}>Home</Text>
        </View>
    );
}

export default HomeComponent;

const styles = StyleSheet.create({
    homeText: {
        color: Colors.primaryLblue
    }
});