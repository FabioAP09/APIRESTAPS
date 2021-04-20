import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Produtos extends Component{
    render(){
        return(
            <View style={styles.bloco4}>
                <View style={{width:50,height:50}}>
                <Text>{this.props.data.image} </Text>
                </View>
                <View>
                <Text style={{marginHorizontal:200, height:100,textAlign:'center'}}>{this.props.data.description}</Text>
                </View>
                <View >
                <Text style={{backgroundColor:'orange',marginHorizontal:200,textAlign:'center'}}>{this.props.data.category}</Text>
                </View>
                
                
                
                
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    bloco4:{
      backgroundColor:'blue',
      padding:15,
      marginVertical:8,
      marginHorizontal:10
    },
    
    
  })
  

