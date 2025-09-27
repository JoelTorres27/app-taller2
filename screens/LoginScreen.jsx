import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  // Estados para almacenar lo que el usuario escribe
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Valida las credenciales
    if (username === 'root' && password === '1234') {
      navigation.reset({ // Para que el usuario no pueda volver atrás a la pantalla de Login
        index: 0, // Para que no haya pantallas en el stack antes de MainApp
        routes: [{ name: 'MainApp' }], // Navega al Drawer
      });
    } else {
      // Si son inválidas, se muestra un mensaje de error
      Alert.alert('Error', 'Usuario o contraseña incorrectos.');
        setUsername('');
        setPassword('');
    }
  };

  return (
    <ImageBackground
    style = {styles.container}
    source = {require('../assets/images/slogin.png')}>
    <View
    style={styles.container}>
      <Image 
      style = {styles.image}
      source ={require('../assets/images/login.png')}></Image>
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <Text style ={styles.label}>Usuario:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Text style= {styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}

        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <TouchableOpacity
            style={styles.btn}
            onPress={handleLogin}>
            <Image
            style= {styles.image2}
            source = {require('../assets/images/entrar.png')}></Image>
            <Text
            style={styles.texto}>Ingresar</Text>
            </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    gap: 10,
    alignItems: 'center'
  },
  label:{
    color: 'white',
    fontSize: 25,
  },
  image:{
    height:200,
    width: 200,
    marginHorizontal: 'auto',
  },
  image2:{
    height: 50,
    width: 50
    },
  titulo: { 
    fontSize: 50, 
    color: 'white',
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 24 
  },
  input: {
    fontSize: 20,
    color: 'white',
    height: 45,
    width: 200,
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
   btn: { backgroundColor: '#2a934fff', borderRadius: 10, flexDirection: 'row',
  height: 70, width: 200, flexDirection:'row', marginBottom: 10, padding: 10, alignItems: 'center'},
  texto : {color: 'white',fontSize: 30, fontWeight: 'bold',textAlign:'center', alignContent:'center', flexDirection: 'row',marginHorizontal: 20,
  },
});

export default LoginScreen;