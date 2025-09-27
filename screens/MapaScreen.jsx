import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import React from 'react'

export default function MapaScreen() {
  return (
    <MapView style={styles.map}
        initialRegion={{
            latitude: -0.264983,
            longitude: -78.550295,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    />
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%'
    }
})