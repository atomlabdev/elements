import { useState } from "react";
import { View } from "react-native";
import tailwind from "twrnc";
import { Refresh } from "@/components/refresh";

export const DefaultRefresh = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={tailwind`flex items-center justify-center`}>
      <Refresh loading={loading} />
    </View>
  );
};
