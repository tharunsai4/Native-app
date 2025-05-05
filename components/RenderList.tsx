import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { useState } from "react";
const RenderItems = ({ list }) => {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  return (
    <Link href={`/product/${list.id}`} className="flex-1 m-[1px]">
      <Card className="p-5 rounded-lg max-w-[360px] bg-[rgba(0,0,0,0)] ">
        <Image
          source={{
            uri: list.thumbnail,
          }}
          className="mb-[6px] h-[240px] w-full rounded-md aspect-[4/3]"
          alt="image"
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-[2px] text-typography-700">
          {list.category}
        </Text>

        <Heading size="md" className="mb-[4px]">
          {list.title}
        </Heading>

        <Text className="mt-2">RS : {list.price}</Text>
      </Card>
    </Link>
  );
};

export default RenderItems;
