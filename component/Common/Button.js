import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

const Button = ({ children, isLoading,...props }) => {
  return (
    <Pressable
      {...props}
      className="bg-blue-500 rounded-xl h-12 justify-center items-center mt-4"
    >
      <Text>{isLoading ? <ActivityIndicator /> : children}</Text>
    </Pressable>
  );
};

export default Button;
