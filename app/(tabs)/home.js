import React from "react";
import SwipableList from "../../component/SwipableList/SwipableList";
import { Stack } from "expo-router";

const home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "TODAY",
          headerStyle: {
            backgroundColor: "#204B53",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <SwipableList />
    </>
  );
};

export default home;
