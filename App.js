import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "twrnc";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={tailwind`text-red-900`}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
