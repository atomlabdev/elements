import {
  Card,
  CardContent,
  CardImage,
  CardSubtitle,
  CardText,
  CardTitle,
} from "@/components/card";
import tailwind from "twrnc";

export const CardExample = () => {
  return (
    <Card style={tailwind`w-full max-w-sm`}>
      <CardContent style={tailwind`gap-1`}>
        <CardTitle>This is a card</CardTitle>
        <CardText>You can use it to display information</CardText>
      </CardContent>
      <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
      <CardContent style={tailwind`gap-1`}>
        <CardSubtitle>Posted by @worldtraveller</CardSubtitle>
        <CardText>2 hours ago</CardText>
      </CardContent>
    </Card>
  );
};
