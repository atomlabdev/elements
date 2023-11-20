import { StarRating } from "@/components/star-rating";
import { useState } from "react";
import { View } from "react-native";
import tailwind from "twrnc";

export const CustomIconStarRatingExample = () => {
  const [starRating, setStarRating] = useState(0);

  return (
    <View style={tailwind`w-full`}>
      <StarRating
        scale={10}
        starRating={starRating}
        onChange={setStarRating}
        showLabel
        customIcon={(isSelected) => (
          <View
            style={tailwind`w-4 h-4 rounded-full ${
              isSelected ? "bg-green-400" : "bg-gray-400"
            }`}
          />
        )}
      />
    </View>
  );
};
