import React from "react";
import { Text } from "react-native";

const Label = ({ name }) => {
  return (
    <Text className="text-gray-300 font-medium text-lg mb-2">
      {name.toUpperCase()}
    </Text>
  );
};

export default Label;
