import React from 'react';
import { 
    FlatList,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons } from "@expo/vector-icons";

import FeedItem from '../components/feed/FeedItem';

export default class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: <TouchableOpacity onPress={() => navigation.navigate("NewPost")} style={{ marginRight: 15 }}><Ionicons name="ios-add" size={35} color={"#e3b23c"} /></TouchableOpacity>
    });

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.feedContainer}>
                <FlatList
                    data={[1,2,3,4,5]}
                    renderItem={() => <FeedItem navigation={navigation} /> }
                    keyExtractor={(item) => item }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        backgroundColor: '#121212',
    },
})