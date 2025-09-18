import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
    style = {styles.container}
    source = {require('../assets/images/fondo.png')}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Cyber Stitch </Text>
      <Image
        source={require('../assets/images/stitch.jpg')} 
        style={styles.image}></Image>
      <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('Login')}>
      <Image
      style = {styles.login}
      source={require('../assets/images/login.png')}></Image>
      <Text
      style={styles.texto}>Ir a Login</Text>
      </TouchableOpacity>
    </View>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 30},
  title: { fontSize: 50, fontWeight: 'bold', marginBottom: 20, color: 'white',textAlign:'center',
  textShadowColor: '#2a3179ff',textShadowOffset: { width: -6, height: 5 },textShadowRadius: 10,},
  image: { width: 320, height: 320, marginBottom: 30, borderRadius: 200, borderColor:'green'  },
  texto : {color: 'white',fontSize: 30, fontWeight: 'bold',textAlign:'center', alignContent:'center',
  },
  btn: { backgroundColor: '#2a934fff', borderRadius: 10,
  height: 75, width: 240, flexDirection:'row', marginBottom: 20, padding: 13},
  login: {height: 55, width: 55, color:'white',marginRight: 10, alignContent: 'center', alignSelf: 'center',},
});

export default WelcomeScreen;