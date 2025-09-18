import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import productos from '../assets/data/productos.json'

export default function MenuScreen() {
  return (
    <ImageBackground
      style = {styles.container}
      source = {require('../assets/images/fondo.png')}>
    <View>
      <Text>MenuScreen</Text>
<FlatList
  data = {productos}
  renderItem = { ( {item} ) =>
    <View>
    <Text
        style={styles.tituloproducto}>
        {item.name}</Text>
    
    <TouchableOpacity>
      <Image
      style={styles.img}
      source={{uri:item.image}}>
      </Image>
    </TouchableOpacity>
      <Text
      style={styles.precio}>
        Precio: $ {item.price}</Text>
    </View>}>
</FlatList>
    </View>
      </ImageBackground>
  )
}
const styles = StyleSheet.create({
  precio:{
    color:'white',
    fontSize:23,
    backgroundColor: '#ac39efff',
    marginHorizontal:50,
    textAlign:'center',
    borderRadius:20,
    marginBottom:20
  },
  img:{
    width:200,
    height:100,
    backgroundColor: 'white',
    alignSelf:'center'
  },
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  tituloproducto: {
    fontSize: 25,
    color: '#d8791bff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
  },
})