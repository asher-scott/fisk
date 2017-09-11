import React from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class FeedItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 41.0793,
                longitude: -85.1394,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            marker: {
                coordinate: {
                    latitude: 41.0785,
                    longitude: -85.1278,
                },
            },
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation)

        return (
            <View style={styles.feedItemContainer}>
                <View style={styles.profileDetails}>
                    <View style={styles.profileImageContainer}>
                        <TouchableOpacity onPress={() => navigate('Profile')}>
                            <Image style={styles.profileImage} source={{uri: 'http://placehold.it/50x50'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Asher Scott</Text>
                        <Text style={styles.timestamp}>August 29, 2017 at 3:45PM</Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>See below for instructions on how to configure for deployment as a standalone app on Android. center: items are centered in the cross-axis</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView 
                        initialRegion={this.state.region} 
                        height={200}
                        scrollEnabled={false}
                        zoomEnabled={false}
                        pitchEnabled={false}
                        rotateEnabled={false}
                    >
                        <MapView.Marker 
                            coordinate={this.state.marker.coordinate}
                            title={this.state.marker.title}
                            description={this.state.marker.description}    
                        />
                    </MapView>
                </View>
                <ScrollView
                    contentContainerStyle={styles.imageContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Image style={styles.imageStart} source={{uri: "http://placehold.it/100x100"}} />
                    <Image style={styles.image} source={{uri: "http://placehold.it/100x100"}} />
                    <Image style={styles.imageEnd} source={{uri: "http://placehold.it/100x100"}} />
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <View style={styles.postInteractionsContainer}>
                        <TouchableOpacity><Ionicons name="ios-chatboxes-outline" size={28} color="#e3b23c" /></TouchableOpacity>
                        <View style={styles.likesContainer}>
                            <TouchableOpacity><Ionicons name="ios-heart-outline" size={28} color="#e3b23c" /></TouchableOpacity>
                            <Text style={styles.likesCounter}>600k</Text>
                        </View>
                    </View>
                    <TouchableOpacity><Ionicons name="ios-more-outline" size={28} color="#e3b23c" /></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedItemContainer: {
        padding: 10,
        backgroundColor: "#191919",
        borderColor: 'black',
        borderTopWidth: .5,
        borderBottomWidth: .5,
    },
    profileDetails: {
        flexDirection: 'row',
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    userInfo: {
        paddingLeft: 10,
    },
    userName: {
        color: "#e3b23c",
        fontSize: 22,
    },
    timestamp: {
        color: "#dfdfdf",
    },
    descriptionContainer: {
        paddingTop: 10,
    },
    description: {
        color: "#dfdfdf"
    },
    mapContainer: {
        paddingTop: 10,
    },
    imageContainer: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imageStart: {
        height: 100,
        width: 100,
        marginRight: 2,
    },
    image: {
        height: 100,
        width: 100,
        marginHorizontal: 2,
    },
    imageEnd: {
        height: 100,
        width: 100,
        marginLeft: 2,
    },
    buttonContainer: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    postInteractionsContainer: {
        width: 130,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    likesContainer: {
        flexDirection: "row",
    },
    likesCounter: {
        color: "#e3b23c",
        paddingTop: 4,
        paddingLeft: 4,
        fontSize: 20,
    }
})