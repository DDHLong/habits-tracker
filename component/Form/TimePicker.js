import { View, Text, TouchableWithoutFeedback, Easing } from "react-native";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import WheelPicker from "react-native-wheely";
import { formatTime } from "../../utils/utils";

const hourArray = Array.from({ length: 24 }, (_, index) => index);
const minuteArray = Array.from({ length: 61 }, (_, index) => index);

const TimePicker = React.memo(() => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [hour, setHour] = useState(6);
  const [minute, setMinute] = useState(30);
  const rotation = useSharedValue(0);

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
    rotation.value = withTiming(!isCollapsed ? 0 : 180);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={toggleCollapse}>
        <View
          className="flex-row h-24 items-center rounded-2xl p-4"
          style={{ backgroundColor: "#0E292E" }}
        >
          <View>
            <Text className="text-white text-lg font-bold">
              {formatTime(hour, minute)}
            </Text>
            <Text className="text-gray-400 font-medium text-lg">
              Reminder
            </Text>
          </View>
          <Animated.View className="ml-auto mr-3" style={animatedStyle}>
            <Icon name="chevron-down" color={"#fff"} size={24} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Collapsible collapsed={isCollapsed}>
        <View
          className="flex-row h-26 items-center rounded-b-2xl w-4/5 self-center justify-center"
          style={{ backgroundColor: "#0E292E" }}
        >
          <WheelPicker
            selectedIndex={hour}
            options={hourArray}
            onChange={(index) => setHour(index)}
            containerStyle={{ backgroundColor: "#0E292E" }}
            selectedIndicatorStyle={{ backgroundColor: "#0E292E" }}
            itemTextStyle={{ color: "#fff" }}
            visibleRest={1}
          />
          <Text className="text-white font-bold">:</Text>
          <WheelPicker
            selectedIndex={minute}
            options={minuteArray}
            onChange={(index) => setMinute(index)}
            containerStyle={{ backgroundColor: "#0E292E" }}
            selectedIndicatorStyle={{ backgroundColor: "#0E292E" }}
            itemTextStyle={{ color: "#fff" }}
            visibleRest={1}
          />
        </View>
      </Collapsible>
    </>
  );
});

export default TimePicker;
