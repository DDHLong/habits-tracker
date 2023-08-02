import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({ children, ...props }) => {
  return (
    <Pressable
      {...props}
      className="bg-blue-500 rounded-xl h-12 justify-center items-center mt-4"
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

export default Button;
