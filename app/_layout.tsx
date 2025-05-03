import { View, Text } from 'react-native'
import React from 'react'
import "../global.css";
import { Stack } from 'expo-router';
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name ="index" options = {{title: 'shop'}} />
      <Stack.Screen name = "product/[id]" options = {{title : "Product"}} />
    </Stack>
  )
}

export default _layout