import React from "react";
import { Stack, useRouter } from "expo-router";
import { pb } from "../../libs/pocketbase";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../component/Common/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import { styled } from "nativewind";

const StyledText = styled(Text);

const profile = () => {
  const router = useRouter();
  const logOut = async () => {
    pb.authStore.clear();
    router.replace("/signIn");
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "PROFILE",
          headerStyle: {
            backgroundColor: "#204B53",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLeft: () => (
            <Button
              className="bg-transparent w-4 mt-0 px-2"
              onPress={() => router.back()}
            >
              <Icon name="chevron-left" size={18} color="#fff" />
            </Button>
          ),
        }}
      />
      <View style={{ flex: 1, backgroundColor: "#204B53", padding: 16 }}>
        <Button onPress={logOut}>
          <StyledText className="text-white font-bold text-base">Sign out</StyledText>
        </Button>
      </View>
    </>
  );
};

export default profile;
