import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const IconPicker = ({ openSheet, emoji }) => {
  return (
    <TouchableOpacity
      className="flex-row h-16 items-center rounded-2xl p-3"
      style={{ backgroundColor: "#0E292E", width: "48%" }}
      onPress={openSheet}
    >
      <View
          className="p-2 rounded-2xl text-sm w-12 mr-2 h-12 justify-center items-center"
          style={{ backgroundColor: "#218380" }}
        >
          <Text className="text-white text-xl font-bold">{emoji ? emoji : "+"}</Text>
        </View>
        <Text className="text-gray-400 font-medium text-lg">
          Icon
        </Text>
    </TouchableOpacity>
  );
};

export default IconPicker;
