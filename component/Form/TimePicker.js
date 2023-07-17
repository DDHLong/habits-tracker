import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);

const TimePicker = () => {

  return (
    <StyledTouchableOpacity
      className="flex-row h-24 items-center rounded-2xl p-4"
      style={{ backgroundColor: "#0E292E" }}
    >
      <StyledView>
        <StyledText className="text-white text-lg font-bold">
          6:30
        </StyledText>
        <StyledText className="text-gray-400 font-medium text-lg">
          Reminder
        </StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default TimePicker;
