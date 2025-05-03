import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
const RenderItems = ({ list }) => {
  return (
    
      <Card className="p-5 rounded-lg max-w-[360px] bg-white ">
        <Image
          source={{
            uri: list.thumbnail,
          }}
          className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
          alt="image"
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {list.category}
        </Text>

        <Heading size="md" className="mb-4">
          {list.title}
        </Heading>

        <Text className="mt-2">RS : {list.price}</Text>
      </Card>
    
  );
};

export default RenderItems;
