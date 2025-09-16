import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Acceder" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#fff',
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 24 
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;