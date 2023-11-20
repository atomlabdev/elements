import { StarRating } from "@/components/star-rating";
import { useState } from "react";
import { View } from "react-native";
import tailwind from "twrnc";

export const DefaultStarRatingExample = () => {
  const [starRating, setStarRating] = useState(0);

  return (
    <View style={tailwind`w-full`}>
      <StarRating starRating={starRating} onChange={setStarRating} showLabel />
    </View>
  );
};
