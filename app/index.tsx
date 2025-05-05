import { View, Text, SafeAreaView, FlatList, TextInput } from "react-native";
import React, { useState } from "react";
import data from "../assets/products.json";
import RenderItems from "../components/RenderList";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import {Picker} from "@react-native-picker/picker";
const index = () => {
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
  });

  const [productData, setProductData] = useState(data.products);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOption,setSortOption] = useState("default")
  

  const fetchData = async () => {
    const response = await fetch(
      "https://dummyjson.com/products?limit=100"
    );
    const result = await response.json();
    setProductData(result.products);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  const filtreData = productData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filtreData].sort((a,b) =>{
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    return 0;
  })
  return (
    <SafeAreaView>
      <TextInput
        className="border-gray-500s bg-white p-[25px]"
        placeholder="search here"
        value={search}
        onChangeText={setSearch}
      />

      <View >
        <Picker 
        style={{  margin:3}}
        selectedValue={sortOption}
        onValueChange={(value) =>setSortOption(value)}>
          <Picker.Item label="Sort: Default" value="default" />
          <Picker.Item label = "Price:Low to High" value="price-asc" />
          <Picker.Item label = "Price: High to Low" value="price-desc" />
        </Picker>
      </View>
      <FlatList
        key={numColumns}
        className="bg-gray-200 w-[calc(100%-2rem)]"
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        data={sortedData}
        renderItem={({ item }) => <RenderItems list={item} />}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      ></FlatList>
    </SafeAreaView>
  );
};

export default index;
