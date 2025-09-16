import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={require('../assets/images/stitch.jpg')} 
        style={styles.image}
      />
      <Button
        title="Ir a Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 36, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 30, borderRadius: 100 },
});

export default WelcomeScreen;