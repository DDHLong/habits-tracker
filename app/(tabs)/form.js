import React from "react";
import { Stack } from "expo-router";
import HabitForm from "../../component/Form";


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
      <HabitForm />
    </>
  );
};

export default form;
