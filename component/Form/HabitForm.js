import { View, Text, TextInput } from "react-native";
import React from "react";
import { useController, useForm } from "react-hook-form";
import { styled, withExpoSnack } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const HabitForm = () => {
  const { control, handleSubmit } = useForm();
  return (
    <>
      <Label name={"Name"} />
      <Input name="habit" control={control} />
    </>
  );
};

export default withExpoSnack(HabitForm);

const Input = ({ name, control }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <StyledTextInput
      className="h-16 p-4 rounded-2xl text-white text-2xl"
      style={{ backgroundColor: "#0E292E" }}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};

const Label = ({ name }) => {
  return <StyledText className="text-white text-lg mb-2">{name}</StyledText>;
};
