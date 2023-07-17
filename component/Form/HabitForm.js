import { View, Text, Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import { styled } from "nativewind";
import Input from "./Input";
import IconPicker from "./IconPicker";
import Label from "./Label";
import TimePicker from "./TimePicker";
import Accordion from "../Accordion";

const StyledView = styled(View);
const StyledText = styled(Text);

const HabitForm = ({ openSheet, emoji }) => {
  const viewWidth = Dimensions.get('window').width;
  const gapWidth = viewWidth - (viewWidth * 0.96);
  const { control, handleSubmit } = useForm();

  return (
    <>
      <Label name={"Name"} />
      <Input name="habit" control={control} />
      <Label name={"Icon & color"} />
      <StyledView className="flex flex-row items-center mb-4" style={{ gap: gapWidth }}>
        <IconPicker openSheet={openSheet} emoji={emoji} />
      </StyledView>
      <Label name={"Reminder"} />
      <TimePicker />
      <Label name={"Reminder"} />
      <Accordion />
    </>
  );
};

export default HabitForm;
