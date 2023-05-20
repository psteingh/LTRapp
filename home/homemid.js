import { View, Text, Image, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import HomeMidUseNav from '../constants/HomeMidUseNav';

function HomeMid() {
    return (
        <View style={styles.homeMidContainer}>

            <View style={styles.homeMidChildContainer}>
            <HomeMidUseNav screenName='LierBoard'>
            <Text style={styles.homeMidTitle}>Lier Board</Text>
            <Text style={styles.homeMidDescription}>
            Public ...see lies Users have made public</Text>
            <Image
                style={styles.homeMidImage}
                source={require('../assets/images/ltrcatalog.png')} />
            </HomeMidUseNav>
            </View>
            
            <View style={styles.homeMidChildContainer}>
            <HomeMidUseNav screenName='LogIn'>
            <Text style={styles.homeMidTitle}>List of Lies</Text>
            <Text style={styles.homeMidDescription}>
            Private ...Users can store & track their lies</Text>
            <Image
                style={styles.homeMidImage}
                source={require('../assets/images/ltrvault.png')} />
            </HomeMidUseNav>
            </View>
        </View>
    );
}

export default HomeMid;

const styles = StyleSheet.create({
    homeMidContainer: {
        flexDirection: 'row',
        margin: 5
    },
    homeMidChildContainer: {
        flex: 3,
        borderWidth: 1,
        borderColor: Colors.primaryLred,
        marginVertical: 5
    },
    homeMidTitle: {
        color: Colors.primaryOffWhite,
        fontSize: 20,
        fontFamily: 'LibreBaskervilleBold'
    },
    homeMidDescription: {
        color: Colors.primaryWhite,
        fontSize: 9,
        fontFamily: 'RobotoBold'
    },
    homeMidImage: {
        margin: 5,
        width: 100,
        height: 100
    }
});