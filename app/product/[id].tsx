import { View } from 'react-native'
import {Text} from "@/components/ui/text"
import React from 'react'
import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Image } from "@/components/ui/image"
import { VStack } from "@/components/ui/vstack"
import {  useLocalSearchParams } from 'expo-router'
import products from "@/assets/products.json"

const Details = () => {
    const {id} = useLocalSearchParams();
    const product = products.products.find((p) => p.id == id);
    if(!product){
      return <Text>"oops Product not found"</Text>
    }
  return (
    <Card className="p-5 rounded-lg w-full h-full bg-white ">
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
            <VStack className="mb-6">
              <Heading size="md" className="mb-4">
                {product.title}
              </Heading>
              
              <Text className="mt-2">RS : {product.price}</Text>
            </VStack>
            <Box className="flex-col sm:flex-row">
              <Button className="px-4 py-2 mr-0 mb-3 bg-slate-600 sm:mr-3 sm:mb-0 sm:flex-1">
                <ButtonText size="sm">Add to cart</ButtonText>
              </Button>
              <Button
                variant="outline"
                className="px-4 py-2 border-outline-300 sm:flex-1"
              >
                <ButtonText size="sm" className="text-typography-600">
                  Wishlist
                </ButtonText>
              </Button>
            </Box>
          </Card>
  )
}

export default Details