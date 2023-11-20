import { StarRating } from "@/components/star-rating";
import { useState } from "react";
import { View } from "react-native";
import tailwind from "twrnc";

export const CustomScaleStarRatingExample = () => {
  const [starRating, setStarRating] = useState(0);

  return (
    <View style={tailwind`w-full`}>
      <StarRating
        scale={10}
        starRating={starRating}
        onChange={setStarRating}
        showLabel
      />
    </View>
  );
};
