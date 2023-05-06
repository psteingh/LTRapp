import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './footernote';
import Contact from './contact';

import LtrLogoFooter from '../constants/ltrlogofooter';

function ContactScreen({navigation}) {
    return (
        <View>
            <Text>Contact test</Text>
            <Button
                title="Testing"
                onPress={() => navigation.navigate('Contact') } />
        </View>
    )
}

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <LtrLogoFooter />
            </View>
            <View>
            <Contact />
            </View>
            <View>
                <ContactScreen />
            </View>

        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors.primaryDblue,
        alignItems: 'center',
        margin: 5
    }
});