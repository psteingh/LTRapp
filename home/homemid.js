import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import GoToButton from '../constants/GoToButton';

function HomeMid({navigation}) {
    return (
        <View style={styles.homeMidContainer}>
            <View style={styles.homeMidChildContainer}>
            
            <Text style={styles.homeMidTitle}>Lier Board</Text>
            <Text style={styles.homeMidDescription}>
            Public ...see lies Users have made public</Text>
            <Image
                style={styles.homeMidImage}
                source={require('../assets/images/ltrcatalog.png')} />
            
            <View style={styles.pressableContainer}>
            <Pressable
                style={styles.contactButtonContainer}
                onPress={() => navigation.navigate('MyTabs',
                {screen: 'LierBoard'})} >
            <Text style={styles.contactButtonText}>Go to Lier Board</Text>
            </Pressable>
            </View>
            </View>
            <GoToButton screenName='LierBoard' />
            <View style={styles.homeMidChildContainer}>
            <Text style={styles.homeMidTitle}>List of Lies</Text>
            <Text style={styles.homeMidDescription}>
            Private ...Users can store & track their lies</Text>
            <Image
                style={styles.homeMidImage}
                source={require('../assets/images/ltrvault.png')} />
            </View>
        </View>
    );
}

export default HomeMid;

const styles = StyleSheet.create({
    pressableContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        marginHorizontal: 5,
        marginBottom: 5
    },
    contactButtonContainer: {
        backgroundColor: Colors.primaryLgreen,
        margin: 5
    },
    contactButtonText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 5
    },
    homeMidContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    homeMidChildContainer: {
        flex: 3,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primaryLred
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