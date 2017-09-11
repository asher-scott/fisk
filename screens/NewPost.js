import React from 'react';
import { 
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default class NewPostScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: null,
            mapData: {
                region: null,
                markers: [],
            },
            photos: [],
        }
    }

    renderMap() {
        return null;
    }

    renderPhotos() {
        return null;
    }

    render() {
        return (
            <View style={styles.newPostContainer}>
                <TextInput
                    style={styles.descriptionTextInput}
                    placeholder={"What did you reel in this time?"}
                    placeholderTextColor={"#7f7f7f"}
                    multiline={true}
                 />
                 <TouchableOpacity onPress={() => {}} style={styles.addContainer}>
                     <View style={styles.iconContainer}>
                        <Ionicons name="ios-pin" size={30} color="#e3b23c" />
                     </View>
                     <View style={styles.textContainer}>
                        <Text style={styles.addText}>Add Map Location</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.photoContainer}>

                </View>
                <TouchableOpacity onPress={() => {}} style={styles.addContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons style={styles.addIcon} name="add-a-photo" size={28} color="#e3b23c" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.addText}>Add Photo</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    newPostContainer: {
        flex: 1,
        backgroundColor: '#121212',
    },
    descriptionTextInput: {
        height: 200,
        paddingTop: 15,
        paddingHorizontal: 15,
        color: "#dfdfdf",
        backgroundColor: "#191919",
        fontSize: 18,
    },
    addContainer: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 3,
        backgroundColor: "#2f2f2f",
    },
    iconContainer: {
        width: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
    },
    addText: {
        color: '#e3b23c',
        fontSize: 20,
        paddingTop: 6,
        paddingLeft: 20,
    }
})