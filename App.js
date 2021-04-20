import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import api from './src/service/api';
import Produtos from './src/components/Produtos';



export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
          produtos:[
            
          ]
    }
  }
  async componentDidMount(){
   
    const response = await api.get('items');
    this.setState({
      produtos: response.data
    })
  }
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
      
      <View style={styles.bloco1}>
        
      </View>
      <View style={styles.bloco2}>
        <Text style={styles.title}>Lista de Produtos</Text>
        </View>
      
        <FlatList 
          data={this.state.produtos}
          keyExtractor={item=>item.id.toString()}
          renderItem={({item})=>
          <Produtos data={item} />}
        />
        
      
      <View style={styles.bloco3}>
        <Text style={styles.rodape}>Products Bela Vista-2021</Text>
      </View>
      </View>
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    margin:10
  },
  bloco1:{
    backgroundColor:'#2696F7',
    height:70,
    padding:10
  },
  bloco2:{
    backgroundColor:'white',
    height:100,
    textAlign:'center'
  },
  bloco4:{
    backgroundColor:'blue',
    padding:15,
    marginVertical:8,
    marginHorizontal:16
  },
  
  bloco3:{
    backgroundColor:"#515151",
    height:40
  },
  rodape:{
    textAlign:'center',
    color:'white'
  }, 
  title:{
    fontSize:30,
    padding:20,
    color:'#05C1FF'
  }
})
