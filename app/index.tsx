import { View, FlatList, Text } from 'react-native'
import React from 'react'
import data from "../assets/products.json"
import { SafeAreaView } from 'react-native-safe-area-context'
import { RenderList } from "../components/RenderList"

const index = () => {

  

  return (
    <SafeAreaView>
      <View>
      <FlatList 
      data={data.products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <RenderList  product = {item}/>
        
    }
      />
      </View>
      
    
    </SafeAreaView>
  )
}

export default index