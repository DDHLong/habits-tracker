import { Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HabitForm from "../../component/Form/HabitForm";

const form = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "NEW HABIT",
          headerStyle: {
            backgroundColor: "#204B53",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <ScrollView style={{ flex: 1, backgroundColor: "#204B53", padding: 16 }}>
        <HabitForm />
      </ScrollView>
    </>
  );
};

export default form;
