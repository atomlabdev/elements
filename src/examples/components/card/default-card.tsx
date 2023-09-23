import { Card, CardImage, CardTitle, CardContent } from "@/components/card";

export const DefaultCard = () => {
  return (
    <Card>
      <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
      <CardContent>
        <CardTitle>Title here</CardTitle>
      </CardContent>
    </Card>
  );
};
