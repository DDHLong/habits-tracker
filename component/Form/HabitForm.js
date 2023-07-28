import { View, Text, Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import Input from "./Input";
import IconPicker from "./IconPicker";
import Label from "./Label";
import TimePicker from "./TimePicker";

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
      <View
        className="flex flex-row items-center"
        style={{ gap: gapWidth }}
      >
        <IconPicker openSheet={openSheet} emoji={emoji} />
      </View>
      <Label name={"Reminder"} />
      <TimePicker />
    </>
  );
};

export default HabitForm;
