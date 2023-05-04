import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function FooterNote() {
    return (
        <View style={styles.footerNoteContainer}>
            <Text style={styles.footerNoteText}>Due to limited ...</Text>
        </View>
    );
}

export default FooterNote;

const styles = StyleSheet.create({
    footerNoteContainer: {
        backgroundColor: 'transparent',
        margin: 5
    },
    footerNoteText: {
        fontFamily: 'RobotoBold',
        fontSize: 15,
        color: Colors.primaryWhite,
        margin: 5
    }
});