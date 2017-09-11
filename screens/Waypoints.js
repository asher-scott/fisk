import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { MapView } from 'expo';


export default class WaypointsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 41.0793,
                longitude: -85.1394,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            waypoints: [
                { latitude: 41.0785, longitude: -85.1272 },
                { latitude: 41.0780, longitude: -75.1278 },
                { latitude: 41.0770, longitude: -85.1275 },
                { latitude: 41.0734, longitude: -70.1273 },
                { latitude: 41.0710, longitude: -76.1243 },
            ],
        };
    }


    render() {
        const waypoints = this.state.waypoints.map((waypoint, i) => {
            return <MapView.Marker key={i} coordinate={waypoint} />
        })

        console.log(waypoints);

        return (
            <View>
                <MapView initialRegion={this.state.region} height={560}>
                    {waypoints}
                </MapView>
            </View>
        )
    }
}