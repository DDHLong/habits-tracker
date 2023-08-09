import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { cn } from "../../utils/utils";

const Button = ({ children, isLoading, className, ...props }) => {
  return (
    <Pressable
      {...props}
      className={cn(
        "bg-blue-500 rounded-xl h-12 justify-center items-center mt-4",
        className
      )}
    >
      <Text>{isLoading ? <ActivityIndicator /> : children}</Text>
    </Pressable>
  );
};

export default Button;
