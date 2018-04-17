import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class Daftar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount()  {
      const url = 'http://gusnando.com/mobile/widiartana/daftarlcd.php';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  render() {
    return (
      <View style={{marginTop: 30, justifyContent:'center'}}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>DAFTAR PEMINJAMAN LCD</Text>
      </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <Text style={styles.ListFirst}>{item.id_lcd}</Text>
              <Text style={styles.ListFirst}>{item.nama}</Text>
              <Text style={styles.ListFirst}>{item.nim}</Text>
            </View>
        }
        />


      </View>
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#64B5F6',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor:'#BBDEFB',
        marginTop: 5,
        flex: 1,
        justifyContent: "center"
    },
    ListFirst: {
      fontSize: 20
    }

  });
