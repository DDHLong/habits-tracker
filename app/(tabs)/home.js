import React from "react";
import { Stack, useRouter } from "expo-router";
import SwipableList from "../../component/SwipableList";
import Button from "../../component/Common/Button";
import Icon from "react-native-vector-icons/FontAwesome";

const home = () => {
  const router = useRouter();

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
          headerLeft: () => (
            <Button
              className="bg-transparent w-4 mt-0 px-4"
              onPress={() => router.push("/profile")}
            >
              <Icon name="user" size={20} color="#fff" />
            </Button>
          ),
        }}
      />
      <SwipableList />
      
    </>
  );
};

export default home;
