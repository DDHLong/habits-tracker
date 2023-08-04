import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import Input from "./Input";
import IconPicker from "./IconPicker";
import Label from "./Label";
import TimePicker from "./TimePicker";
import { useRouter } from "expo-router";
import { useMemo, useRef, useState } from "react";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import BottomSheet from "@gorhom/bottom-sheet";
import FloatingButton from "../../component/Common/FloatingButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { pb } from "../../libs/pocketbase";
import useFetchHabits from "../../hooks/useFetchHabits";

const HabitForm = () => {
  const viewWidth = Dimensions.get("window").width;
  const gapWidth = viewWidth - viewWidth * 0.96;

  const { createNewHabit } = useFetchHabits();
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();
  // ref
  const bottomSheetRef = useRef(null);
  const [emoji, setEmoji] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const newHabit = {
        name: data.habit,
        icon: emoji,
        time_reminder: "",
        goal: data.goal,
        unit: data.unit,
        author: pb.authStore.model.id,
      };
      if (data.habit !== "") {
        createNewHabit(newHabit);
      }
      setIsLoading(false);
      reset();
      setEmoji("");
      router.push("/home");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const openSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const selectEmoji = (emoji) => {
    setEmoji(emoji);
    bottomSheetRef.current?.close();
  };

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#204B53", padding: 16 }}>
        <View>
          <Label name={"Name"} />
          <Input
            name="habit"
            control={control}
            placeholder={"Workout, Water, Make bed ..."}
          />
        </View>
        <View>
          <Label name={"Icon & color"} />
          <View
            className="flex flex-row items-center mb-4"
            style={{ gap: gapWidth }}
          >
            <IconPicker openSheet={openSheet} emoji={emoji} />
          </View>
        </View>
        <View>
          <Label name={"Reminder"} />
          <TimePicker />
        </View>
        <View className="mt-4 mb-4">
          <Label name={"With a goal of"} />
          <Input name="goal" control={control} placeholder={"Goal"} />
          <Input
            name="unit"
            control={control}
            placeholder={"times, km, pages..."}
          />
        </View>
      </ScrollView>
      <FloatingButton onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
        <Icon name="plus" size={30} color="#fff" />
      </FloatingButton>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <EmojiSelector
          category={Categories.history}
          theme="#204B53"
          onEmojiSelected={(emoji) => selectEmoji(emoji)}
        />
      </BottomSheet>
    </View>
  );
};

export default HabitForm;
