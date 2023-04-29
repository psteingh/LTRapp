import { View, Text, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/colors';
// import LinGradScreen from '../constants/lingradscreen';

{/* <LinGradScreen>
    <View style={styles.viewContainer}>
    <Text style={styles.aboutLiesBoardText}> About Lies Board </Text>
    </View>
</LinGradScreen> */}

function AboutLiesBoard() {
    return (
        <View style={styles.container}>
        <LinearGradient
            colors={['blue', 'transparent']}
            style={styles.background}
             />
        <Text style={styles.aboutLiesBoardText}>
            About Lies Board
        </Text>

        </View>
    );
}

export default AboutLiesBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300
    },
    aboutLiesBoardText: {
        fontSize: 20,
        color: Colors.primaryLred,
        backgroundColor: 'transparent'        
    }
});