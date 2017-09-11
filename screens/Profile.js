import React from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, Image } from 'react-native';

import FeedItem from '../components/feed/FeedItem';


export default class ProfileScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.profileContainer}>
                <View style={styles.userDataContainer}>
                    <View>
                        <Image style={styles.profileImage} source={{uri: 'http://placehold.it/200x200'}} />
                    </View>
                    <View style={styles.profileData}>
                        <Text style={styles.profileName}>Asher Scott</Text>
                        <Text style={styles.profileLocation}>Fort Wayne, Indiana</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: '#121212',
    },
    userDataContainer: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: "#1f1f1f",
        borderColor: 'black',
        borderBottomWidth: .5,
    },
    profileImage: {
        height: 75,
        width: 75,
        borderRadius: 37.5
    },
    profileData: {
        paddingTop: 5,
        paddingLeft: 10,
    },
    profileName: {
        color: "#e3b23c",
        fontSize: 28,
    },
    profileLocation: {
        color: "#dfdfdf",
    }
});