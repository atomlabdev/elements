import { useState } from "react";
import { View } from "react-native";
import tailwind from "twrnc";
import { Refresh } from "@/components/refresh";
import { Button } from "@/components/button";

export const ButtonRefresh = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(!loading);
  };

  return (
    <View style={tailwind`flex items-center justify-center`}>
      <Button
        icon={(style) => <Refresh loading={loading} iconStyle={style} />}
        text={loading ? "Loading..." : "Refresh"}
        onPress={handlePress}
      />
    </View>
  );
};
