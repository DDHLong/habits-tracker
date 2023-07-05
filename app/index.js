import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fff" },
          headerShadowVisible: false,
          headerTitle: "Today",
          headerTitleAlign: 'center',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
