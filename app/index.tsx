import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import data from "../assets/products.json";
import RenderItems from "../components/RenderList";
const index = () => {
  return (
    <SafeAreaView>
      <FlatList
      className="bg-gray-200"
      numColumns={2}
        data={data.products}
        renderItem={({ item }) => (
        <RenderItems list={item} />)}
      ></FlatList>
    </SafeAreaView>
  );
};

export default index;
