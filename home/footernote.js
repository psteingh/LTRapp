import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function FooterNote() {
    return (
        <View style={styles.footerNoteContainer}>
            <Text style={styles.footerNoteText}>
            Due to limited server space, lawyers & politicians
            are not allowed to use this app</Text>
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
        fontFamily: 'Roboto',
        fontSize: 10,
        color: Colors.primaryWhite,
        margin: 2
    }
});