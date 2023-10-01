import { Card, CardContent, CardImage, CardTitle } from "@/components/card";
import tailwind from "twrnc";

export const CardExample = () => {
  return (
    <Card style={tailwind`w-72`}>
      <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
      <CardContent>
        <CardTitle>Title here</CardTitle>
      </CardContent>
    </Card>
  );
};
