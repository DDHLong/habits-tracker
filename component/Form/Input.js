import React from "react";
import { useController } from "react-hook-form";
import { TextInput } from "react-native";

const Input = ({ name, control, placeholder, isPassword = false }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <TextInput
      className="h-16 px-4 rounded-2xl text-gray-400 text-base items-center justify-center placeholder:text-gray-400 mb-4"
      style={{ backgroundColor: "#0E292E" }}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      placeholderTextColor="rgb(156, 163, 175)"
      secureTextEntry={isPassword}
    />
  );
};

export default Input;
