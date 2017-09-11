# Feed Item
The following is the documentation for a feed item in fisk:

FeedItem props:

~~~~
props: {
    user_id: number,
    mapData: {
        region: {
            latitude: number,
            longitude: number,
            latitudeDelta: number,
            latitudeDelta: number,
        },
        markers: [<MapView.Marker>...],
    },
    socialData: {
        commentIDs: [number...],
        likes: number:
    },
    photoData: {
        // TODO
    }
}
~~~~