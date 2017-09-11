import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { AppLoading, Font } from 'expo';


import { TabNav } from './navigation/NavigationRouters';
import FeedScreen from './screens/Feed';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'gudea': require('./assets/fonts/Gudea-Regular.ttf'),
      'gloria': require('./assets/fonts/GloriaHallelujah.ttf'),
    });
    

    this.setState({ appIsReady: true });
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.body}>
            <TabNav style={{backgroundColor: "#121212"}} />
          </View>
        </View>
      );
    } else {
      return <AppLoading />
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    color: '#e3b23c',
    fontSize: 26,
    fontFamily: 'gloria',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: '#000000'
  },
  header: {
    height: 66,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#2f2f2f',
  },
  body: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerButton: {
    color: '#F78764'
  }
});
