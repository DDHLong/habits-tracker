import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";

const StyledText = styled(Text);

const Label = ({ name }) => {
  return (
    <StyledText className="text-gray-300 font-medium text-lg mb-2 mt-4 first:mt-0">
      {name.toUpperCase()}
    </StyledText>
  );
};

export default Label;
