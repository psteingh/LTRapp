import { View, Button, FlatList, StyleSheet } from 'react-native';

import LinGradScreen from '../constants/lingradscreen';
import TitleText from '../constants/titletext';

// import ContactTile from '../constants/ContactTile';

import CategoryGridTile from '../constants/CategoryGridTile';

import { CATEGORIES } from './dummy-data';

function AboutUsBoard({navigation}) {
    function renderCategoryItem() {
        function pressHandler() {
            navigation.navigate('AboutLies');
        }

    return (
        <CategoryGridTile
            // title={itemData.item.title}
            // color={itemData.item.color}
            onPress={pressHandler} />
    );
    }

    return (
        <View style={styles.container}>
        <LinGradScreen />
        <TitleText>About Us Board</TitleText>
        <Button
            title="Go to About Lies"
            onPress={() => navigation.navigate("AboutLies")} />
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2} />
        </View>
    );
}

export default AboutUsBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});