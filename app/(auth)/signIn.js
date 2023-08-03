import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { pb } from "../../libs/pocketbase";
import Label from "../../component/Form/Label";
import { useForm } from "react-hook-form";
import Input from "../../component/Form/Input";
import Button from "../../component/Common/Button";

const signIn = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.username, data.password);
      setIsLoading(false);
      router.replace("/home");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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

      <View style={{ flex: 1, backgroundColor: "#204B53", padding: 16 }}>
        <View style={{ marginTop: 100 }}>
          <Label name="Username or email" />
          <Input
            name="username"
            control={control}
            placeholder={"Username or email"}
          />
          <Label name="Password" />
          <Input
            name="password"
            control={control}
            placeholder={"Password"}
            isPassword={true}
          />
          <Button onPress={handleSubmit(onSubmit)} disabled={isLoading} isLoading={isLoading}>
            Log in
          </Button>
        </View>
      </View>
    </>
  );
};

export default signIn;
