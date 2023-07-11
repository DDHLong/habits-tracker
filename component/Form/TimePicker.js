import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);

const TimePicker = () => {
  return (
    <StyledTouchableOpacity
      className="flex-row h-16 items-center rounded-2xl p-3"
      style={{ backgroundColor: "#0E292E", width: "48%" }}
    >
      <Text>TimePicker</Text>
    </StyledTouchableOpacity>
  );
};

export default TimePicker;
