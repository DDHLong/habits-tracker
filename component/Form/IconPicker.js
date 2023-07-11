import React from "react";
import { styled } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const IconPicker = ({ openSheet, emoji }) => {
  return (
    <StyledTouchableOpacity
      className="flex-row h-16 items-center rounded-2xl p-3"
      style={{ backgroundColor: "#0E292E", width: "48%" }}
      onPress={openSheet}
    >
      <StyledView
          className="p-2 rounded-2xl text-sm w-12 mr-2 h-12 justify-center items-center"
          style={{ backgroundColor: "#218380" }}
        >
          <StyledText className="text-white text-xl">{emoji ? emoji : "+"}</StyledText>
        </StyledView>
        <StyledText className="text-gray-400 font-medium text-lg">
          Icon
        </StyledText>
    </StyledTouchableOpacity>
  );
};

export default IconPicker;
