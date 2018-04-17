import React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Daftar from './uts/Daftar';
import Tambah from './uts/Tambah';
import Kembali from './uts/Kembali';
const film = require('./uts/film.png');

class HeaderTool extends React.Component {
  render() {
    return (
        <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#BBDEFB' }}>
        <Text> RECORD LCD </Text>
        </View>
      );
    }
  }
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderTool />
  };
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={film} style={{ height: 200, width: 200 }} />
            <Text style= {{ fontWeight: 'bold' }} >RECORD LCD</Text>
          <View style={{margin: 10 }}>
          <Button
          color="orange"
            title="MASUK"
          onPress={() => this.props.navigation.navigate('ScreenMenu')}
        />
        </View>
        </View>
    );
  }
}

class DrafScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderTool />
  };
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
        <View style={{ margin: 10 }}>
          <Button
          color="orange"
            title="LIHAT LCD"
          onPress={() => this.props.navigation.navigate('View')}
        />
        </View>
        <View style={{ margin: 10 }}>
        <Button
        color="orange"
          title="PINJAM LCD"
        onPress={() => this.props.navigation.navigate('Add')}
      />
      </View>
      <View style={{ margin: 10 }}>
      <Button
      color="orange"
        title= "PENGEMBALIAN LCD"
      onPress={() => this.props.navigation.navigate('Del')}
    />
    </View>
        </View>
    );
  }
}

class Views extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderTool />
  };
  render() {
    return (
        <Daftar />
      );
    }
  }
  class Added extends React.Component {
    static navigationOptions = {
      headerTitle: <HeaderTool />
    };
    render() {
      return (
          <Tambah />
        );
      }
    }
    class Delt extends React.Component {
      static navigationOptions = {
        headerTitle: <HeaderTool />
      };
      render() {
        return (
            <Kembali />
          );
        }
      }

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ScreenMenu: {
      screen: DrafScreen,
    },
    View: {
      screen: Views,
    },
  Add: {
    screen: Added,
  },
  Del: {
      screen: Delt,
  },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
