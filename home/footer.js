import { View, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import FooterNote from './footernote';
import LtrLogoFooter from '../constants/ltrlogofooter';

function Footer({navigation}) {
    return (
        <View style={styles.footerContainer}>
            <View>
            <FooterNote />
            </View>
            <View>
            <LtrLogoFooter />
            </View>

            <Button
            title="MT CP"
            onPress={() => navigation.navigate('MyTabs',
            { screen: 'ContactPage' }) } />

            {/* <Button
                title="MT HC CP"
                onPress={() => navigation.navigate('MyTabs',
                {screen: 'HomeComponent', params: {screen: 'ContactPage'}})} />
            <Button
                title="MT FT CP"
                onPress={() => navigation.navigate('MyTabs',
                {screen: 'Footer', params: {screen: 'ContactPage'}})} />
            <Button
                title="MT HC FT CP"
                onPress={() => navigation.navigate('MyTabs',
                {screen: 'HomeComponent', params:
                {screen: 'Footer', params: {screen: 'ContactPage'}}})} /> */}


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