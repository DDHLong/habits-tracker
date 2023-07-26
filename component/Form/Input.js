import { styled } from "nativewind";
import React from "react";
import { useController } from "react-hook-form";
import { TextInput } from "react-native";

const StyledTextInput = styled(TextInput);

const Input = ({ name, control, placeholder }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <StyledTextInput
      className="h-16 p-4 rounded-2xl text-gray-400 text-lg items-center placeholder:text-gray-400"
      style={{ backgroundColor: "#0E292E" }}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      placeholderTextColor="rgb(156, 163, 175)"
    />
  );
};

export default Input;
