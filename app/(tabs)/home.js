import React from "react";
import { Stack, useRouter } from "expo-router";
import SwipableList from "../../component/SwipableList";
import { Text, TouchableOpacity } from "react-native";
import { pb } from "../../libs/pocketbase";

const home = () => {
  const router = useRouter();
  const logOut = async () => {
    pb.authStore.clear();
    router.replace("/signIn");
  };
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
      <TouchableOpacity onPress={logOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
};

export default home;
