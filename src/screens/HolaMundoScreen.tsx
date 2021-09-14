import React from 'react'
import { Text, View } from 'react-native'

const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 40,
              textAlign:'center'
            }}>
              Hola Kmilo!</Text>
          </View>
    )
}

export default HolaMundoScreen
