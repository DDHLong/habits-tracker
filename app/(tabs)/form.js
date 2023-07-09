import { Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const form = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Add new habit",
          headerStyle: {
            backgroundColor: "#204B53",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <ScrollView style={{ flex: 1, backgroundColor: "#204B53" }}>
        <Text>form</Text>
      </ScrollView>
    </>
  );
};

export default form;
