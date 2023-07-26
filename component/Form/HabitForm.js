import { View, Text, Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import { styled } from "nativewind";
import Input from "./Input";
import IconPicker from "./IconPicker";
import Label from "./Label";
import TimePicker from "./TimePicker";

const StyledView = styled(View);
const StyledText = styled(Text);

const HabitForm = ({ openSheet, emoji }) => {
  const viewWidth = Dimensions.get("window").width;
  const gapWidth = viewWidth - viewWidth * 0.96;
  const { control, handleSubmit } = useForm();

  return (
    <>
      <Label name={"Name"} />
      <Input
        name="habit"
        control={control}
        placeholder={"Workout, Water, Make bed ..."}
      />
      <Label name={"Icon & color"} />
      <StyledView
        className="flex flex-row items-center"
        style={{ gap: gapWidth }}
      >
        <IconPicker openSheet={openSheet} emoji={emoji} />
      </StyledView>
      <Label name={"Reminder"} />
      <TimePicker />
    </>
  );
};

export default HabitForm;
