import React from 'react';
import {AppRegistry, StyleSheet, View, Button, Text, TextInput, TextInputText} from 'react-native';

export default class Kembali extends React.Component {
    constructor()
    {
        super();

        this.state = {
          id_lcd: '',
          nama: '',
          nim: '',
          ActivityIndicator_Loading: false,

        }
    }
    Delete_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/widiartana/deletelcd.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  id_lcd : this.state.id_lcd,
                  nama : this.state.nama,
                  nim : this.state.nim,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    render() {
      return (
        <View style = {{flex:1, backgroundColor:'#e6ffff'}}>
          <View style={{backgroundColor:'orange'}}>
             <Text style = {{marginTop: 20, padding: 15, fontSize: 20, color: 'white', textAlign:'center'}} >
              PENGEMBALIAN LCD
            </Text>
           </View>

          <View style={{margin:20, padding: 10, backgroundColor:'#BBDEFB', borderRadius:3}}>
              <TextInput style = {{height: 50, color:'black'}}
                placeholder="Masukkan id LCD"
                placeholderTextColor="black"
                underlineColorAndroid= "#757575"
                selectionColor="#E91E63"
                  onChangeText={(TextInputText) => this.setState({id_lcd: TextInputText})}
              />
              <TextInput style = {{height: 50, color:'black'}}
                placeholder="Masukkan Nama"
                placeholderTextColor="black"
                underlineColorAndroid= "#757575"
                selectionColor="#E91E63"
                onChangeText={(TextInputText) => this.setState({nama: TextInputText})}
              />

              <TextInput style = {{height: 50, color:'black' }}
                placeholder="Masukkan Nim"
                placeholderTextColor="black"
                underlineColorAndroid= "#757575"
                selectionColor="#E91E63"
                onChangeText={(TextInputText) => this.setState({nim: TextInputText})}
                keybordType = 'numeric'
              />
              <Button title="KEMBALIKAN SEKARANG" onPress={this.Delete_Data_Into_MySQL} color="orange" />
                 </View>
         </View>
      );
    }
  }
