import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importamos todas tus pantallas
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';
import CarritoScreen from '../screens/CarritoScreen';
import MapaScreen from '../screens/MapaScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Pantalla del drawer, que contiene las pantallas accesibles tras el login
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Menú">
      <Drawer.Screen name="Menú" component={MenuScreen} />
      <Drawer.Screen name="Carrito" component={CarritoScreen} />
      <Drawer.Screen name="Mapa" component={MapaScreen} />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome" 
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      
      <Stack.Screen name="MainApp" component={MyDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function NavegadorPrincipal() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}