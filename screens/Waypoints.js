import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MapView } from 'expo';


export default class WaypointsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapType: "satellite",
            waypoints: [
                { latitude: 41.277314, longitude: -85.506911 },
                { latitude: 41.275669, longitude: -85.506147 },
                { latitude: 41.262768, longitude: -85.477973 },
            ],
        };
    }

    dropPin() {
        this.setState({waypoints: [...this.state.waypoints, {
            latitude: this.props.screenProps.coords.latitude,
            longitude: this.props.screenProps.coords.longitude,
        }]});
    }

    renderDebug() {
        return (
            <View>
                <Text>{this.props.screenProps.coords.latitude} {this.props.screenProps.coords.longitude}</Text>
                <Text>Map Type: {this.state.mapType}</Text>
            </View>
        );
    }

    render() {
        const region = {
            latitude: this.props.screenProps.coords.latitude,
            longitude: this.props.screenProps.coords.longitude,
            latitudeDelta: 0.0030,
            longitudeDelta: 0.0030,
        };

        const waypoints = this.state.waypoints.map((waypoint, i) => {
            return <MapView.Marker key={i} coordinate={waypoint} />
        })

        return (
            <View>
                <MapView 
                    mapType={this.state.mapType} 
                    initialRegion={region} 
                    height={520}
                    showsUserLocation={true} 
                    followUserLocation={true}>
                    {waypoints}
                </MapView>
                <View>
                    <Button title="Drop a pin" onPress={this.dropPin.bind(this)} />
                </View>
            </View>
        )
    }
}