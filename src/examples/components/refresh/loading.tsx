import { useState } from "react";
import { View } from "react-native";
import tailwind from "twrnc";
import { Refresh } from "@/components/refresh";

export const LoadingRefresh = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={tailwind`flex items-center justify-center`}>
      <Refresh loading={loading} />
    </View>
  );
};
