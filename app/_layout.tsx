import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import React from 'react'
import "../global.css";
import { Stack } from 'expo-router';
import products from "@/assets/products.json";

const _layout = () => {
  return (
    <GluestackUIProvider>
    <Stack>
      <Stack.Screen name ="index" options = {{title: 'shop'}} />
      <Stack.Screen name = "product/[id]" options= {{title: "Product"}} />
    </Stack>
    </GluestackUIProvider>
  )
}

export default _layout