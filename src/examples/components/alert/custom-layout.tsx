import { View } from "react-native";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import tailwind from "twrnc";
import { Avatar } from "@/components/avatar";

export const AlertWithCustomLayout = () => {
  return (
    <Alert>
      <View style={tailwind`flex flex-row items-center gap-4`}>
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1676824452052-b030b9026b5b",
          }}
        />
        <View style={tailwind`flex flex-col`}>
          <AlertTitle>New Message</AlertTitle>
          <AlertDescription>
            Maria sent you a message - tap to reply
          </AlertDescription>
        </View>
      </View>
    </Alert>
  );
};
