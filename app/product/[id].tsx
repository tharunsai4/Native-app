import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import products from "@/assets/products.json"
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
const Details = () => {
  const {id} = useLocalSearchParams();
  const product = products.products.find((p) => p.id == id)
  if (!product){
    return <Text>"opps not found"</Text>
  }
  return (
    <View>
     <Card className="p-5 rounded-lg w-full bg-white ">
        <Image
          source={{
            uri: product.thumbnail,
          }}
          className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
          alt="image"
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.category}
        </Text>

        <Heading size="md" className="mb-4">
          {product.title}
        </Heading>

        <Text className="mt-2">RS : {product.price}</Text>
      </Card>
      <Box className="flex-col sm:flex-row">
              <Button className="px-4 py-2 m-2  mb-3 bg-slate-600 sm:mr-3 sm:mb-0 sm:flex-1">
                <ButtonText size="sm">Add to cart</ButtonText>
              </Button>
              <Button
                variant="outline"
                className="px-4 py-2 border-outline-300 m-2 sm:flex-1"
              >
                <ButtonText size="sm" className="text-typography-600">
                  Wishlist
                </ButtonText>
              </Button>
            </Box>
    </View>
  )
}

export default Details