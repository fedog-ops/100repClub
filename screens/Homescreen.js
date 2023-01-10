import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Homescreen = () => {
  return (
    <View>
      <Button title="Start" color='orange' onPress={() => console.log('clicked btn')}/>
      </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})