import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Waypoints from '../screens/Waypoints';
import NewPost from '../screens/NewPost';
import CatchLog from '../screens/CatchLog';

export const FeedStack = StackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: "Feed",
            headerTintColor: "#e3b23c",
            headerStyle: {
                backgroundColor: "#2f2f2f"
            },
            headerTitleStyle: {
                color: "#e3b23c",
                fontSize: 22,
                fontWeight: "bold"
            },
            headerBackTitleStyle: {
                color: "#e3b23c",
            }
        },
    },
    NewPost: {
        screen: NewPost,
        navigationOptions: {
            title: "New Post",
            headerTintColor: "#e3b23c",
            headerStyle: {
                backgroundColor: "#2f2f2f"
            },
            headerTitleStyle: {
                color: "#e3b23c",
                fontSize: 22,
                fontWeight: "bold"
            },
            headerBackTitleStyle: {
                color: "#e3b23c",
            }
        },
    }
});


export const ProfileStack = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profile",
            headerTintColor: "#e3b23c",
            headerStyle: {
                backgroundColor: "#2f2f2f"
            },
            headerTitleStyle: {
                color: "#e3b23c",
                fontSize: 22,
                fontWeight: "bold"
                
            },
            headerBackTitleStyle: {
                color: "#e3b23c",
            }
        },
    },
});


export const CatchLogStack = StackNavigator({
    CatchLog: {
        screen: CatchLog,
        navigationOptions: {
            title: "Catch Log",
            headerTintColor: "#e3b23c",
            headerStyle: {
                backgroundColor: "#2f2f2f"
            },
            headerTitleStyle: {
                color: "#e3b23c",
                fontSize: 22,
                fontWeight: "bold"
                
            },
            headerBackTitleStyle: {
                color: "#e3b23c",
            }
        },
    },
});


export const WaypointsStack = StackNavigator({
    Waypoints: {
        screen: Waypoints,
        navigationOptions: {
            title: "Waypoints",
            headerTintColor: "#e3b23c",
            headerRight: <TouchableOpacity style={{ marginRight: 15 }}><Ionicons name="ios-add" size={35} color={"#e3b23c"} /></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#2f2f2f"
            },
            headerTitleStyle: {
                color: "#e3b23c",
                fontSize: 22,
                fontWeight: "bold"
            },
            headerBackTitleStyle: {
                color: "#e3b23c",
            }
        },
    },
});


export const TabNav = TabNavigator({
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                focused
                ? <Ionicons name="ios-contact" size={32} color="#e3b23c" />
                : <Ionicons name="ios-contact-outline" size={32} color="#e3b23c" />
            ),
        }
    },
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                focused
                ? <Ionicons name="ios-list-box" size={32} color="#e3b23c" />
                : <Ionicons name="ios-list-box-outline" size={32} color="#e3b23c" />
            )
        },
    },
    Waypoints: {
        screen: WaypointsStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                focused
                ? <Ionicons name="ios-map" size={32} color="#e3b23c" />
                : <Ionicons name="ios-map-outline" size={32} color="#e3b23c" />
            )
        }
    },
    CatchLog: {
        screen: CatchLogStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                focused
                ? <Ionicons name="ios-book" size={32} color="#e3b23c" />
                : <Ionicons name="ios-book-outline" size={32} color="#e3b23c" />
            )
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        style: {
            height: 44,
            backgroundColor: "#2f2f2f",
        }
    }
})