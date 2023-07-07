import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SwipableList from "./component/SwipableList/SwipableList";
import CardComponent from "./component/SwipableList/SwipeableCard";

const Home = () => {
  return (
    <SafeAreaProvider>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#164B60" },
          headerShadowVisible: false,
          headerTitle: "Today",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },
        }}
      />

      <CardComponent />
    </SafeAreaProvider>
  );
};

export default Home;
