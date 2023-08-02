import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { pb } from "../../libs/pocketbase";

const signIn = () => {
  const router = useRouter();

  const logIn = async () => {
    const authData = await pb
      .collection("users")
      .authWithPassword("bunhap", "Bunhapyeudau");

    if (authData) {
      router.replace("/home");
    }

  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "SIGN IN",
          headerStyle: {
            backgroundColor: "#204B53",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />

      <View style={{ flex: 1, backgroundColor: "#204B53" }}>
        <TouchableOpacity onPress={logIn}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default signIn;
