import { View, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
// import TitleText from '../constants/titletext';

import TopHead from '../home/tophead';
import HomeMid from '../home/homemid';
import Footer from '../home/footer';

function HomeComponent() {
    return (
        <View style={styles.homeContainer}>
        <LinGradScreen />
        {/* <TitleText>Home</TitleText> */}
        
        <TopHead />
        <HomeMid />
        <Footer />
        </View>
    );
    }

export default HomeComponent;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    }
});